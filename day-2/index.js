import express from "express";
import userRouter from "./routers/user.routes";

const app = express();
const PORT = 8080;

app.use("api/v1/users", userRouter);

app.get("/", (req,res)=> {
    // console.log(req.body);
    res.status(200).send("Home Page")
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});