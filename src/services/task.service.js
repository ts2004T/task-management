import pool from "../config/db.js";
import AppError from "../utils/AppError.js";

export const createTaskService = async ({ title, description, userId }) => {

     const result = await pool.query(
          `INSERT INTO tasks (title, description, user_id)
     VALUES ($1, $2, $3)
     RETURNING *`,
     [title, description, userId]
);

return result.rows[0];
};

export const getTasksService = async ({
     userId,
     status,
     page = 1,
     limit = 10,
}) => {
  const offset = (page - 1) * limit;

const values = [userId];
let filterQuery = "";

if (status) {
     values.push(status);
     filterQuery = `AND status = $${values.length}`;
}

  // Get paginated tasks
const tasksQuery = `
     SELECT *    
     FROM tasks
     WHERE user_id = $1
     ${filterQuery}
     ORDER BY created_at DESC
     LIMIT $${values.length + 1}
     OFFSET $${values.length + 2}
     `;

const tasksResult = await pool.query(tasksQuery, [
     ...values,
     limit,
     offset,
     ]);

  // Get total count
const countQuery = `
     SELECT COUNT(*) 
     FROM tasks 
     WHERE user_id = $1
     ${filterQuery}
     `;

const countResult = await pool.query(countQuery, values);
const total = parseInt(countResult.rows[0].count, 10);

return {
     data: tasksResult.rows,
     pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
     },
     };
};


export const updateTaskService = async (taskId, userId, updates) => {
     const result = await pool.query(
          `UPDATE tasks
     SET title = COALESCE($1, title),
     description = COALESCE($2, description),
     status = COALESCE($3, status)
     WHERE id = $4 AND user_id = $5
     RETURNING *`,
     [
          updates.title,
          updates.description,
          updates.status,
          taskId,
          userId,
     ]
);
if (result.rows.length === 0) {
     throw new AppError("Task not found or unauthorized", 404);
}


return result.rows[0];
};

export const deleteTaskService = async (taskId, userId) => {

     const result = await pool.query(

          `DELETE FROM tasks
     WHERE id = $1 AND user_id = $2`,

     [taskId, userId]

);
if (result.rowCount === 0) {
     throw new AppError("Task not found or unauthorized", 404);

}
};
