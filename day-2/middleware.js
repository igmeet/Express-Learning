//*  1. Middleware

import express from "express";

const app = express();
const PORT = 8080;

// inbuilt middlware
app.use(express.json());

function SayHiMiddleware(req, res, next){
    console.log("hi from middleware");
    next();
}

// global middleware
// app.use(SayHiMiddleware);


// specific route middlware
app.get("/", SayHiMiddleware, (req,res)=> {
    res.status(200).send("Home Page");
});



app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
});

