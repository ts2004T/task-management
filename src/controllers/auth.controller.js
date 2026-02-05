import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
     registerUserService,
     loginUserService,
} from "../services/auth.service.js";

export const registerUser = catchAsync(async (req, res, next) => {
     const { name, email, password } = req.body;

if (!name || !email || !password) {
     return next(new AppError("All fields are required", 400));
}

const user = await registerUserService({ name, email, password });
res.status(201).json(user);
});

export const loginUser = catchAsync(async (req, res, next) => {
     const { email, password } = req.body;

if (!email || !password) {
     return next(new AppError("Email and password required", 400));
}

const result = await loginUserService({ email, password });
res.status(200).json(result);
});
