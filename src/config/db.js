import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
     host: "localhost",
     port: 5432,
     user: "postgres",
     password: process.env.DB_PASSWORD,
     database: "task_management",
});

export default pool;
await pool.query("SET search_path TO public");
