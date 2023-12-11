import express from "express";
const router = express.Router();
import userModel from "./schema.js";

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "user already exist" });
        }
        const newUser = new userModel({ username, password, email })
        await newUser.save();
        console.log("register success");  
        res.status(200).json({message : "register success"})  
    } catch (err) {
        res.status(500).json({ type: err })
    }
})
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const usr = await userModel.findOne({ email })
        if (!usr) {

            res.status(401).json({ message: "user not found" })
        }
        if (password !== usr.password) {
            return res.status(401).json({ message: "pass wrong" })
        }
        if(usr.email === email && password === usr.password){
            res.status(200).json({message : "login succes"});
            console.log("login success");
        }
        
    }catch {
        console.log("internal error")
    }
})

export default router