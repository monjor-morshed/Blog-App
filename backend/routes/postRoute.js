// import React from 'react'
import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { create, getPosts } from "../controllers/postController.js";
import { deletePost, updatePost } from "../controllers/postController.js";
const router = express.Router();

router.post("/create", verifyUser, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyUser, deletePost);
router.put("/updatepost/:postId/:userId", verifyUser, updatePost);

export default router;
