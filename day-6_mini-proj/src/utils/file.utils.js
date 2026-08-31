// creating file handlers

import fs from "fs";
import path from "path"
import { fileURLToPath } from "url";

// converting file url to path its only way to get it from ES module ?
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename); // getting dirname from file path

const filePath = path.join(__dirname, "data", "tasks.json") // creating tasks.json file to read some tasks


// filePath ---> parse 
export const readTask = ()=> {
    try {
        ensureFileExits(); // yeh kya hai ?? syd yeh dekh rha ki file exits krti h ya nhi
        const data = fs.readFileSync(filePath, "utf-8")
        return JSON.parse(data || "[]"); // why return important too write here and why write "[]"
    }
    catch(error){
        // yeh kese pata chltaa hai ki error ko console kro aur res.send krre ?? 
        console.error("Error reading tasks : ", error);
        return[]; // yeh object return kr rha hai  ???
        
    }
}

export const writeTask = (tasks)=> {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8"); // why utf-8 here in write file
    } catch (error) {
        console.log("Error in writing tasks : ",error)
    }
}

export const ensureFileExits = ()=> {
    try {
        if(!fs.existsSync(filePath)) {
            fs.mkdirSync(path.dirname(filePath), {recursive : true}); // recursive ??
            fs.writeFileSync(filePath, "[]", "utf-8"); 
        }
    } catch (error) {
        console.log("Error in file exits method : ", error)
    }
}