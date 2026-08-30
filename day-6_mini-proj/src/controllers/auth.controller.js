//2. controllers

// export const login = (req, res) => {
//     const { username } = req.body;

//     if (!username) {
//         return res.status(400).send({ error: "username is required" })
//     }

//     req.session.user = { username };
//     res.cookie("username", username, {
//         httpOnly: true,
//         maxAge: 1000 * 60 * 60 * 24
//     })  
//     res.json({
//         message: "User logged in ", username
//     });
// };

// export const logout = (req, res) => {
//     res.clearCookie("username"); // clearing cookie
    
//     // destroying session
//     req.session.destroy((err)=> {
//         if(err) {
//             console.log("error in logout", err)
//             return res.status(500).json({
//                 error : "logout failed"
//             })
//         }
//         res.json({message:"user logout"});
//     })
// };

// what if i do let say kal jake login logout me dikkt ati hai toh developer ko bolna pdega ki aaj site pe dikkt hai toh woh aake fix krega par what if we have an ai agent that can fix that code on same time which is more optimized but haa problem bhi bohot hai



export const login = (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({
            error: "username is required"
        });
    }

    req.session.user = { username };

    res.cookie("username", username, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    });

    res.json({
        message: "User logged in",
        username
    });
};

export const logout = (req, res) => {
    res.clearCookie("username");

    req.session.destroy((err) => {
        if (err) {
            console.log("error in logout", err);
            return res.status(500).json({
                error: "Logout failed"
            });
        }

        res.json({
            message: "User logged out"
        });
    });
};