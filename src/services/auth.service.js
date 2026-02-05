import pool from "../config/db.js";
import { hashPassword, comparePassword } from "../utils/password.util.js";
import { generateToken } from "../utils/jwt.util.js";

export const registerUserService = async ({ name, email, password }) => {
     const existingUser = await pool.query(
          "SELECT id FROM users WHERE email = $1",
          [email]
     );


     if (existingUser.rows.length > 0) {

          throw new Error("User already exists");

     }


     const hashedPassword = await hashPassword(password);


     const result = await pool.query(

          `INSERT INTO users (name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, name, email`,

     [name, email, hashedPassword]

);


return result.rows[0];
};

export const loginUserService = async ({ email, password }) => {

     const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
     [email]
);

if (result.rows.length === 0) {
     throw new Error("Invalid credentials");
}

const user = result.rows[0];

const isMatch = await comparePassword(password, user.password);

if (!isMatch) {
     throw new Error("Invalid credentials");
}

const token = generateToken({
     id: user.id,
     email: user.email,
     role: user.role,
     });

     return { token };
};
