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

// use : using method // inbuilt middleware
app.use(express.json());


//* get req. (it is used for fetching data from server)
app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})




// get users data - industry standards
app.get("/api/v1/users", (req, res) => {

    // query params
    // console.log(req.query);

    //  /api/v1/users?key=value
    const { name } = req.query;

    if (name) {
        const user = userData.filter((user) => {
            return user.name === name;
        })
        return res.status(200).send(user); // if yes than give user
        // but if not than give empty array []
    }
    res.status(200).send(userData); // give all users
})




// get user by id - router params
app.get("/api/v1/users/:id", (req, res) => {
    // console.log(req.params) // id is in string
    // res.status(200).send("User found") 

    // id ko integer me krooo
    // const {id} = req.params;
    const parsedId = parseInt(req.params.id);

    const user = userData.find((user) => {
        return user.id === parsedId;
    })
    res.status(200).send(user);
})




//* post request (it is used for sending data to the server) 
app.post("/api/v1/users", (req, res) => {
    // console.log(req.body) // client se kya aya
    // res.status(201).send("User Created")


    const { name, displayname } = req.body;

    // res.status(201).send("Databases Added")
    // console.log(name, displayname);

    const newUser = {
        id: userData.length + 1,
        name,
        displayname
    }

    userData.push(newUser);

    res.status(201).send({
        message: "User Created Successfully✅",
        data: newUser
    })
})



//* PUt Request - used to update all fields 
app.put("/api/v1/users/:id", (req, res) => {
    // console.log(req.body , req.params);
    // res.status(200).send("User updated");

    const { body, params: { id } } = req;

    // id in string to id in integer
    const parsedId = parseInt(id);
    const userIndex = userData.findIndex((user) => {
        return user.id === parsedId;

    })

    if (userIndex === -1) {
        res.status(200).send("User not found")
    }

    userData[userIndex] = {
        id: parsedId,
        ...body // spreading body obj ???
    }

    res.status(200).send({
        message: "User Updated",
        data: userData[userIndex]
    })

});


app.patch("/api/v1/users/:id", (req, res) => {

    const { body, params: { id } } = req;

    const parsedId = parseInt(id);
    const userIndex = userData.findIndex((user) => {
        return user.id === parsedId;

    })

    if (userIndex === -1) {
        res.status(200).send("User not found")
    }

    userData[userIndex] = {
        id: parsedId,
        ...userData[userIndex],
        ...body
    }

    res.status(200).send({
        message: "User Updated",
        data: userData[userIndex]
    })

});

//* Delete - delete field 
app.delete("/api/v1/users/:id", (req, res) => {

    const { id } = req.params;

    const parsedId = parseInt(id);

    const userIndex = userData.findIndex(
        (user) => user.id === parsedId
    );

    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }

    userData.splice(userIndex, 1);

    res.status(200).send({
        message: "User deleted",
        data: userData
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});