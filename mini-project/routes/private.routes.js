import express  from "express";

const router = express.Router();

router.get("/dashboard", (req,res)=> {
    res.status(200).send({
        message : "Welcome to Dashboard"
    });
});

export default router;