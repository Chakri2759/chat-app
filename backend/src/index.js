import express from "express";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
const app=express();
import dotenv from "dotenv";
dotenv.config();
const port= process.env.PORT;
import authRoute from "./routes/auth.route.js";
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.listen(port,()=>{
    console.log("server is listening on the port 5001");
    connectDB();
})