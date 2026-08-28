// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename); // ?


// const LogMiddleware = (req,res,next)=> {
//     const log = `[${new Date().toISOString()}] : ${req.method} ${req.url}\n`;
//     const LogFile = path.join(__dirname, "../logs/request.log");

//     fs.appendFile(LogFile, log, (err)=> {
//         if(err) console.log("error in log file", err);
//     })
//     next();
// }

// export default LogMiddleware;




import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // ?


const LogMiddleware = (req,res,next)=> {
    const log = `[${new Date().toISOString()} : ${req.method} ${req.url}]\n`;
    const LogFile = path.join(__dirname, "../logs/req.log");

    fs.appendFileSync(LogFile, log, (err)=> {
        if(err) console.log("log file error detected", err);
   })
   next();
}

export default LogMiddleware






