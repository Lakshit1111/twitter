import express from "express";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js"
import  userRoutes  from "./routes/user.routes.js";
import  postRoutes  from "./routes/post.routes.js";
import notificationRoutes from "./routes/notification.routes.js";

import connectdb from "./db/connectdb.js";
import cookieParser from "cookie-parser"
dotenv.config();


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
})



const app = express()
const PORT = process.env.PORT ||5000;

app.use(cors())

app.use(express.json({limit : "5mb"})); // to prase body
// limit should not be large to prevent ddos attack.
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/post" , postRoutes);
app.use("/api/notifications" , notificationRoutes);

app.listen(5000, () => {
    console.log("Server is running on port" ,PORT);
    connectdb();
})