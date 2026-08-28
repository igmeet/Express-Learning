import express  from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/dashboard",authMiddleware ,(req,res)=> {
    res.status(200).send({
        // message : "Welcome to Dashboard"
        message : `Welcome to Dashboard : ${req.user.name}`
    });
});

export default router;