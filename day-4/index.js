// day-4
// cookies - 
// import cookie
// accessing in req.cookies
// app.use(cookiesParser()) middleware
// set a cookie
// creating manual cookie in header in postman and testing it

// headers - self study - in  notes
// status code - self study  - in  notes


import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;

// har ek incoming cookie ko parse/read krke js obj. bana deta hai
// Problem: Express ko cookie directly object ke form mein nahi milti

// Without cookieParser():

// req.cookies

// normally available nahi hota.

// Cookie request ke headers mein hoti hai:

// req.headers.cookie

// Something like:

// name=express
app.use(cookieParser());


app.get("/", (req, res) => {

    // set cookie
    res.cookie("name", "express", {
        // maxAge : 1000 * 60 * 60  * 24
        expires: new Date("2026-08-31")
    })

    res.send(
        "Home page"
    )
});


app.get("/product", (req,res)=> {

    console.log(req.cookies);

    if(req.cookies.name && req.cookies.name === "express") {
        res.status(200).send({
        id : 1,
        name : "Mobile",
        price : "1Lakh"
    })
    
} 
else {
    res.status(403).send("User is unauthorized");   
}
})


app.listen(PORT, () => {
    console.log(`Server run on PORT : ${PORT}`);
})






























// Cookie = Server ka diya hua chhota data jo browser save karta hai aur baad ki requests mein bhej sakta hai.

// Cookie khud stateful ya stateless nahi hoti.

// Cookie ke andar kya hai, woh matter karta hai.

// 1. Cookie + Session ID → Stateful 🔴

// Browser
// 🍪 sessionId=123
//        ↓
// Server
//        ↓
// "123 → Meet"
//        ↓
// Server ke paas session stored

// Server remembers → Stateful



// 2. Cookie + JWT → Stateless 🟢
// Browser
// 🍪 JWT
//        ↓
// Server
//        ↓
// JWT verify
//        ↓
// User = Meet

// Server ko session memory mein store karne ki zarurat nahi.

// Server doesn't remember → Stateless



// 🧠 STATE
// = Server ko kya yaad hai?

// 🍪 COOKIE
// = Browser mein kya save hai?

// 🎫 JWT
// = Authentication information/token

// And:

// Cookie ≠ JWT
// Cookie ≠ Session

// Cookie = WHERE/HOW data is stored & sent
// JWT    = WHAT the authentication token looks like
// Session = Server-side stored state



// Cookie ke time ke 2 common options
// 1. maxAge → kitne milliseconds tak cookie rahegi

// res.cookie("token", "abc", {
//     maxAge: 1000 * 60 * 60
// });

// 2. expires → exact date/time jab cookie expire hogi

// res.cookie("token", "abc", {
//     expires: new Date("2026-09-01")
// });


// correct way to set cookie
// Client
//   ↓
// GET /
//   ↓
// Route handler
//   ↓
// res.cookie()     → response mein cookie set
//   ↓
// res.send()       → response body send
//   ↓
// Client