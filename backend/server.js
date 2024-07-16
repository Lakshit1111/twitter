import express from "express";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import authRoutes from "./routes/auth.routes.js"
import  userRoutes  from "./routes/user.routes.js";
import connectdb from "./db/connectdb.js";
import cookieParser from "cookie-parser"
dotenv.config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secrect: process.env.CLOUDINARY_API_SECRET,
})


const app = express()
const PORT = process.env.PORT ||5000;

app.use(express.json()); // to prase body
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);

app.listen(5000, () => {
    console.log("Server is running on port" ,PORT);
    connectdb();
})