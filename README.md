## 📌 Task Management Backend API

A **production-ready RESTful backend** for managing tasks with secure authentication, authorization, pagination, and PostgreSQL persistence.

This project demonstrates **real-world backend engineering practices** including JWT authentication, relational database design, centralized error handling, and scalable API design.

---

## ✨ Features

- 🔐 JWT-based Authentication (Register & Login)
- 🧑 User-specific task ownership & authorization
- 🗄 PostgreSQL database with relational schema
- 🧱 Layered architecture (Routes → Controllers → Services)
- 📄 Pagination & filtering for scalable task retrieval
- ⚠️ Centralized error handling
- ✅ Input validation middleware
- 📦 Clean REST API semantics (201, 200, 204 responses)

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **JWT (JSON Web Tokens)**
- **bcrypt**
- **ES Modules**

---

## 🧩 Database Schema

### Users

- `id`
- `name`
- `email`
- `password`
- `role`
- `created_at`

### Tasks

- `id`
- `title`
- `description`
- `status`
- `user_id` (foreign key)
- `created_at`

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repo

```bash
git clone https://github.com/<your-username>/task-management-backend.git
cd task-management-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Copy template:

```bash
cp .env.example .env
```

On Windows (Command Prompt):

```bat
copy .env.example .env
```

Then update values as needed:

```env
PORT=3000
JWT_SECRET=your_secret_key

# Option A (recommended for deployment platforms like Render/Railway):
DATABASE_URL=postgres://user:password@host:5432/task_management

# Option B (local PostgreSQL / discrete variables):
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_NAME=task_management
```

### 4️⃣ Run database (PostgreSQL)

Create database:

```sql
CREATE DATABASE task_management;
```

Import tables:

```bash
psql -d task_management -f database/schema.sql
```

### 5️⃣ Start the server

```bash
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## ☁️ Deployment (Render/Railway)

Render Blueprint is included via `render.yaml` for one-click service setup.

1. Push this repository to GitHub.
2. Create a hosted PostgreSQL database.
3. Create a Web Service from this repo.
4. Set start command to `npm start`.
5. Add environment variables:
   - `NODE_ENV=production`
   - `JWT_SECRET=<strong-secret>`
   - `DATABASE_URL=<your-hosted-postgres-url>`
6. Deploy and verify health check:

```text
GET /health
```

---

## 🔑 API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Tasks (Protected)

- `POST /api/tasks`
- `GET /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Pagination & Filtering

```
GET /api/tasks?page=1&limit=5
GET /api/tasks?status=COMPLETED
```

---

## 🧠 What I Learned

- Designing scalable REST APIs
- Implementing authentication & authorization correctly
- SQL schema design with foreign keys
- Handling real-world backend bugs (env, schema, imports)
- Writing clean, maintainable backend code

---

## 📌 Future Improvements

- Rate limiting
- Caching (Redis)
- Docker support
- Unit & integration tests

---

## 👩‍💻 Author

**Tanishka**
