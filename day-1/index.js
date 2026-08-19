// intro and setup 
// 1. npm init --y , 2. npm i express nodemon
// get req.
// post req.
// put
// patch
// delete
// express advance http method


import express from "express";
import userData from "./data.js"

const PORT = 8080;
const app = express();



// get req.
app.get("/", (req,res)=> {
    res.status(200).send("Home Page")
})




// get users data - industry standards
app.get("/api/v1/users", (req,res)=> {

    // query params
    // console.log(req.query);

    //  /api/v1/users?key=value
    const {name} = req.query;

    if(name) {
        const user = userData.filter((user)=> {
            return user.name === name;
        })
        return res.status(200).send(user); // if yes than give user
        // but if not than give empty array []
    }
    res.status(200).send(userData); // give all users
})


 

// get user by id
app.get("/api/v1/users/:id", (req,res)=> {
    // console.log(req.params) // id is in string
    // res.status(200).send("User found") 

    // id ko integer me krooo
    const {id} = req.params;
    const parsedId = parseInt(req.params.id);

    const user = userData.find((user)=> {
        return user.id === parsedId;
    })
    res.status(200).send(user);
})



app.listen(PORT, ()=> {
    console.log(`Server is running on Port:${PORT}`);
});