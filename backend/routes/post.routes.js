import express from "express";
import { protectRouter } from "../middleware/protectRouter.js";
import { allPost, commentOnPost, createPost, deletePost, getFollowingPosts, getLikedPost, getUserPosts, likeUnlikePost } from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/all" , protectRouter , allPost);
router.get("/following" , protectRouter , getFollowingPosts)
router.get("/likes/:id" , protectRouter , getLikedPost);
router.get("/user/:username" , protectRouter , getUserPosts)
router.post("/create" , protectRouter , createPost);
router.post("/like/:id" , protectRouter , likeUnlikePost);
router.post("/comment/:id" , protectRouter , commentOnPost );
router.delete("/:id" , protectRouter , deletePost);


export default router;