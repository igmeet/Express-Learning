import express from "express";
import { generateToken } from "../utils/utils-token.js";

const router = express.Router();


router.get("/generate-token", (req, res) => {
    const token = generateToken();

    // outgoing request
    // res.json(data)  it is eg...

    res.status(200).send({
        message: "token is generated",
        token: token
    })
})


router.get("/", (req, res) => {
    res.status(200).send("Home page")
})


export default router;