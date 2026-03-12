import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import AppError from "./utils/AppError.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
     res.status(200).json({ status: "OK" });
});

// 404 handler
app.all("*", (req, res, next) => {
     next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

// Global error handler (must be last)
app.use(globalErrorHandler);

export default app;
