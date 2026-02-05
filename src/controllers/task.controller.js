import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
     createTaskService,
     getTasksService,
     updateTaskService,
     deleteTaskService,
} from "../services/task.service.js";

export const createTask = catchAsync(async (req, res, next) => {
     const { title, description } = req.body;

     if (!title) {
     return next(new AppError("Title is required", 400));
     }

     const task = await createTaskService({
          title,
          description,
          userId: req.user.id,
     });

     res.status(201).json(task);
});

export const getTasks = catchAsync(async (req, res, next) => {
     const { status, page, limit } = req.query;

const result = await getTasksService({
     userId: req.user.id,
     status,
     page: page ? parseInt(page) : 1,
     limit: limit ? parseInt(limit) : 10,
     });

res.status(200).json(result);
});

export const updateTask = catchAsync(async (req, res, next) => {
     const taskId = parseInt(req.params.id);

const task = await updateTaskService(taskId, req.user.id, req.body);
     res.status(200).json(task);
});

export const deleteTask = catchAsync(async (req, res, next) => {
     const taskId = parseInt(req.params.id);

     await deleteTaskService(taskId, req.user.id);
     res.status(204).send();
});
