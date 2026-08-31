export const authMiddleware = (req,res,next)=> {
    if(req.session && req.session.user) {
        return next();
    }
    res.status(500).json({
        message :"Unauthorized user try to enter...."})
}