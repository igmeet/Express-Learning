// cookies
// session 
// local storage and session storage ?? 
// app.use(cookieParser("igmeet")); ????


import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";


const app = express();
const PORT = 8080;


app.use(session(
    {
        secret: "mysecret",
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:1000*60*60*24 // 1 din
        }
    }
))


app.use(cookieParser("igmeet"))


app.get("/", (req,res)=> {
    console.log(req.session);
    console.log(req.session.id);

    res.status(200).send("home page");
});

// creatingg login session
app.get("/login", (req,res)=> {
    req.session.user = {
        name : "Meet",
        email : "meet@gmail.com",
        age : 23
    }
    res.send(`User : ${req.session.user.name} logged in` )
})

// destroy session
app.get("/logout", (req,res)=> {
    req.session.destroy();
    res.send("user loged out");

})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});