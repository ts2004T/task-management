import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { validateTaskInput } from "../middlewares/validate.middleware.js";
import {
     createTask,
     getTasks,
     updateTask,
     deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", protect, validateTaskInput, createTask);
router.get("/", protect, getTasks);
router.put("/:id", protect, validateTaskInput, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;
