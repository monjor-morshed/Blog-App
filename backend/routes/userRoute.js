import express from "express";
import { test, update } from "../controllers/userController.js";
import { verifyUser } from "../utils/verifyUser.js";
const router = express.Router();

router.get("/test", test);
router.put("/update/:id", verifyUser, update);

export default router;
