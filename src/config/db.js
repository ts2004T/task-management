import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

const isProduction = process.env.NODE_ENV === "production";
const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

const pool = hasDatabaseUrl
     ? new Pool({
          connectionString: process.env.DATABASE_URL,
          ssl: isProduction ? { rejectUnauthorized: false } : false,
       })
     : new Pool({
          host: process.env.DB_HOST || "localhost",
          port: Number(process.env.DB_PORT || 5432),
          user: process.env.DB_USER || "postgres",
          password: process.env.DB_PASSWORD || "",
          database: process.env.DB_NAME || "task_management",
          ssl: isProduction ? { rejectUnauthorized: false } : false,
       });

export default pool;
