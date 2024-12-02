import express from "express";
import {
  test,
  update,
  deleteUser,
  signout,
  getUsers,
  getUser,
} from "../controllers/userController.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:id", verifyUser, update);
router.delete("/delete/:id", verifyUser, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyUser, getUsers);
router.get(":userId", getUser);

export default router;
