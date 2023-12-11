import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user",router);
const db = mongoose.connect(process.env.DB_URL);
db.then(()=>{
    console.log("connection successfull");
}).catch(()=>{
console.log("failed");
})
app.listen(3007,()=>{console.log("server start")})