import express from "express";
const router = express.Router();

router.get("/generate-token", (req,res)=> {
    const token = "token";

    res.status(200).send({
        message : "token is valid",
        token : token
    })
})

router.get("/", (req,res)=> {
    res.status(200).send("Home page")
})

export default router;