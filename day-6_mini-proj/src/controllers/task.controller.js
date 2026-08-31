// importing file handlers
import {readTask, writeTask} from "../utils/file.utils.js"

// creating task controllers 
export const getAllTask = async (req,res)=> {
    if(!req.session.user) {
        return res.status(401).json({
            message : "Unauthenticated user try to get task"
        })
    }

    const task = await readTask();
    res.json(tasks.filter((task)=> task.username === req.session.user));
}


export const createTask = ()=> {

}


export const updateTask = ()=> {

}


export const deleteTask = ()=> {

}