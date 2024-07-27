import express from "express";
import { protectRouter } from "../middleware/protectRouter.js";
import { deleteNotification, deleteNotifications, getNotifications } from "../controllers/notification.controllers.js";

const router = express.Router();

router.get("/", protectRouter,getNotifications);
router.delete("/", protectRouter,deleteNotifications);
router.delete("/:id", protectRouter,deleteNotification);


export default router;