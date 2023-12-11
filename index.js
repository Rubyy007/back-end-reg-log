import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router.js";
const  allowedOrigins = ["https://regi-login.vercel.app/"]
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the request origin is in the allowedOrigins array
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    // You can also configure other CORS options here if needed
  })
);

dotenv.config();
const app = express();
app.use(express.json());
app.use("/user",router);
const db = mongoose.connect(process.env.DB_URL);
db.then(()=>{
    console.log("connection successfull");
}).catch(()=>{
console.log("failed");
})
app.listen(3007,()=>{console.log("server start")})
