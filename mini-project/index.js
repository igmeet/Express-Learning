// Middleware
// routes
// crypto modules
// fs

// {authentication (private, public), logs}

// public routes  - "/generate-token" & "/"
// private routes - "/dashboard"


import express from "express";
import publicRoutes from "./routes/public.routes.js"
import privateRoutes from "./routes/private.routes.js"
import fs  from "fs";
import path from "path";
import { fileURLToPath } from "url"; // file url to path eg : file:///:C://Asus//users///  to C://Asus/users
import LogMiddleware from "./middleware/log.middleware.js";


const app = express();
const PORT = 8080;

// inbuilt middleware
app.use(express.json());

// global custom middleware
app.use(LogMiddleware);


// middleware function to routes
app.use("/public", publicRoutes)
app.use("/private", privateRoutes)

// The file URL string or URL object to convert to a path.
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename); // file path se directory/folder ka path nikalta hai.

// creating log dir.
if(!fs.existsSync(path.join(__dirname, "logs"))){
    fs.mkdirSync(path.join(__dirname, "logs"))
}
 

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})