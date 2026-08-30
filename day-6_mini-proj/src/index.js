// project : Task Manager
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";


import authRoute from "./routes/auth.routes.js"

const app = express();
const PORT = 8080;




// global middleware
app.use(express.json());
app.use(cookieParser());

//3. configure sesssion
app.use(session(
    {
        secret : "my-secret-key",
        resave : false,
        saveUninitialized : false,
        cookie : {
            httpOnly : true,
            secure : false,
            maxAge : 1000*60*60*24 //1 day

        }
    }
))

// auth middleware
app.use("/auth", authRoute);

// routes 
app.get("/", (req,res)=> {
    res.status(200).send("Welcome to Task Manager API");
});



app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});


