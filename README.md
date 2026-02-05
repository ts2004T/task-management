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

```env
PORT=3000
DB_PASSWORD=your_postgres_password
JWT_SECRET=your_secret_key
```

### 4️⃣ Run database (PostgreSQL)

Create database:

```sql
CREATE DATABASE task_management;
```

Create tables (users & tasks).

### 5️⃣ Start the server

```bash
npm run dev
```

Server runs on:

```
http://localhost:3000
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
