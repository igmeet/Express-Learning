import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createTask, deleteTask, getAllTask, updateTask } from "../controllers/task.controller.js";

const router = Router();

router.get("/", authMiddleware, getAllTask);

router.post("/", authMiddleware, createTask);

router.put("/:id", authMiddleware, updateTask)

router.delete("/:id", authMiddleware, deleteTask);

export default router;