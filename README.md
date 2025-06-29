# 💸 Expense Tracker – Full Stack Application

A feature-rich Expense Tracker built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application helps users manage their finances by tracking income and expenses, generating summaries, visualizing trends, and supporting data uploads via Excel files.

🔗 **Live Application**: [Frontend URL](https://expensee-frontend.vercel.app/login)  
🌐 **Backend API**: [Backend URL](https://expensee-backend-mu.vercel.app)

---

## 📦 Project Structure

```
Expensee - Copy/
├── backend/                  # Node.js + Express REST API
└── frontend/expense-tracker/ # React + Vite frontend UI
```

---

## 🧠 Features Overview

### 👤 User Management
- Secure user registration and login with JWT-based authentication
- Middleware-protected routes for user access control

### 💰 Expense & Income Management
- Add, edit, and delete income or expense transactions
- Categorized storage and filtering by type/date
- Upload `.xlsx` files for bulk income/expense entry

### 📈 Dashboard & Visualization
- View total balance, income, and expenses
- Interactive pie charts and breakdowns using **Recharts**
- Responsive UI built with **Tailwind CSS**

### 📂 Data Handling
- Upload `.xlsx` files for batch import
- Backend parses and inserts data into MongoDB using `xlsx`
- Secure download or fetch of financial data via API

---

## ⚙️ Folder Details

### ✅ 1. backend/
Node.js + Express backend providing secure RESTful APIs.

**Key Files:**
- `server.js` – Main server entry point
- `controllers/` – Business logic for authentication, transactions, dashboard
- `models/` – Mongoose schemas
- `middleware/` – Auth and file upload logic
- `config/db.js` – MongoDB connection

**Main Dependencies:** express, mongoose, jsonwebtoken, multer, cors, bcryptjs, xlsx

### ✅ 2. frontend/expense-tracker/
React + Vite frontend with a modern responsive UI.

**Key Files:**
- `src/components/` – Reusable UI components
- `src/pages/` – Dashboard, Login, Register, etc.
- `src/utils/apiPaths.js` – Contains the base URL for backend API
- `vite.config.js` – Vite configuration

**Main Dependencies:** axios, tailwindcss, recharts, emoji-picker-react, moment, react-icons

---

## 🛠️ Local Setup Guide

### 1️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start backend server:
```bash
npm run dev
```

> 📌 Ensure MongoDB Atlas is set to accept connections from `0.0.0.0/0` under Network Access.

### 2️⃣ Frontend Setup
```bash
cd frontend/expense-tracker
npm install
```

Update API base URL in `src/utils/apiPaths.js`:
```js
export const BASE_URL = "https://expensee-backend-mu.vercel.app";
```

Start frontend app:
```bash
npm run dev
```

---

## ☁️ Deployment Guide

### 🔹 Frontend Deployment → Vercel
1. Push your repository to GitHub
2. Visit [https://vercel.com](https://vercel.com) and import the project
3. Configure:
   - Root Directory: `frontend/expense-tracker`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**

### 🔹 Backend Deployment → Vercel
1. Visit [https://vercel.com](https://vercel.com)
2. Import the same repository again as a new project
3. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Output Directory: *(leave blank)*
4. Add environment variables:
   - `PORT=8000`
   - `MONGO_URI`
   - `JWT_SECRET`
5. Deploy and copy the public backend URL

---

## 🔐 Security Notes
- MongoDB and JWT secrets are stored in `.env` (not committed to version control)
- CORS and JWT-based middleware protect all backend routes
- MongoDB access secured with credentials and connection whitelisting

---

## 🧪 Example API Endpoints

**Base URL**: `https://expensee-backend-mu.vercel.app`

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | `/api/auth/register`   | Register a new user               |
| POST   | `/api/auth/login`      | Login and retrieve JWT token      |
| POST   | `/api/income`          | Add a new income entry            |
| POST   | `/api/expense`         | Add a new expense entry           |
| GET    | `/api/dashboard`       | Get dashboard summary             |
| POST   | `/api/income/upload`   | Upload income Excel file          |
| POST   | `/api/expense/upload`  | Upload expense Excel file         |

---

## 📜 NPM Scripts Reference

### Backend
- `npm run dev` – Run server with nodemon
- `npm start` – Run production server

### Frontend
- `npm run dev` – Start Vite development server
- `npm run build` – Generate production build
- `npm run preview` – Preview production build locally

---

## ✅ Summary

This project is:
- 📦 **Modular** and easy to navigate
- 🎨 **UI-rich**, responsive, and interactive
- 🌍 **Deployable** on modern cloud platforms (Vercel)
- 🔒 **Secure**, using JWT, environment configs, and CORS

Built with 💡 by **Athul Sreejith (22BDS0396)**
