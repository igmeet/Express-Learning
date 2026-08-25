import express from "express";


const app = express();
const PORT = 8080;


app.get("/", (req,res)=> {
    // console.log(req.body);
    res.status(200).send("Home Page")
})


app.get("/create-user", (req,res)=> {
    res.send("users page");
})


app.get("/getAllUser", (req,res)=> {
    res.send("get all users");
})


app.get("getUserById", (req,res)=> {
    res.send("get user by id");
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});