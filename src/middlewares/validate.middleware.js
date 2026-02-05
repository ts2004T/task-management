import AppError from "../utils/AppError.js";

export const validateTaskInput = (req, res, next) => {
     const { title, status } = req.body;

     if (title !== undefined && typeof title !== "string") {
     return next(new AppError("Title must be a string", 400));
     }

     if (status && !["PENDING", "COMPLETED"].includes(status)) {
     return next(new AppError("Invalid task status", 400));
     }

     next();
};
