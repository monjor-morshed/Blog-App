import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/userModel.js";
export const test = (req, res) => {
  res.json({ message: "User controller works" });
};

export const update = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You are not authorized"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }

    req.body.password = bcryptjs.hashSync(req.body.password, 12);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (!req.body.username.match(/^[a-z0-9]+$/)) {
      return next(errorHandler(400, "Username must be alphanumeric"));
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      return next(error);
    }
  }
};

export const deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.id) {
    return next(errorHandler(403, "You are not authorized"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Signout successful" });
  } catch (error) {
    return next(error);
  }
};

export const getUsers = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not authorized to view users"));
  }

  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 6;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;
    const users = await User.find()
      .skip(startIndex)
      .limit(limit)
      .sort({ createdAt: sortDirection });

    const userWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const count = await User.countDocuments();

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.find({
      createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({
      users: userWithoutPassword,
      count,
      lastMonthUsers: lastMonthUsers,
    });
  } catch (error) {
    return next(error);
  }
};
