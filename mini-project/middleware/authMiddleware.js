import { validateToken } from "../utils/utils-token.js";

export const authMiddleware = (req,res,next)=> {
    const token  = req.headers['authorization'];

    if(token  && validateToken(token)) {
        // creating custom user
        req.user = {name: "Meet",
            id : 1,
        }
        next();
    } 
    else {
        res.status(401).send("Unauthorized user")
    }  
}
