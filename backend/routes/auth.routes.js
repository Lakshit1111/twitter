import express from "express";
import {login, logout, signup , getMe} from "../controllers/auth.controllers.js"
import { protectRouter } from "../middleware/protectRouter.js";

const router = new express.Router();

router.post("/signup" , signup);

router.post("/login" , login);

router.post("/logout" , logout);

router.get("/me" , protectRouter , getMe);

export default router;