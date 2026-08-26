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

const app = express();
const PORT = 8080;

// inbuilt middleware
app.use(express.json());

// middleware function to routes
app.use("/public", publicRoutes)
app.use("/private", privateRoutes)


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})