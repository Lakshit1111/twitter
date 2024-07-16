import express from "express";
import { protectRouter } from "../middleware/protectRouter.js";
import { getUserProfile , followUnfollowUser, getSuggestedUsers, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRouter,getUserProfile);
router.get("/suggested", protectRouter,getSuggestedUsers);
router.post("/follow/:id",protectRouter ,followUnfollowUser);
router.get("/update",protectRouter ,updateUser);


export default router;