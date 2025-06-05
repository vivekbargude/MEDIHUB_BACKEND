
# 🩺 MediHub Backend – Node.js REST API for Smart Healthcare

This is the backend server for the **MediHub** healthcare management system. Built with **Node.js**, **Express**, and **MongoDB**, this REST API handles user authentication, doctor-patient appointment management, prescription handling, pharmacy interactions, and administrative controls — all in one scalable backend.

---

## 📚 Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [API Endpoints](#api-endpoints)
* [Installation & Setup](#installation--setup)
* [Usage](#usage)
* [Environment Variables](#environment-variables)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [Credits](#credits)

---

## 📌 Project Overview

The MediHub Backend powers the healthcare system’s core logic and data management. It supports multiple user roles — **patients**, **doctors**, **pharmacists**, and **admins** — and ensures secure, role-based access to APIs. With JWT-based authentication, MongoDB schemas for medical records, and modular route handlers, this backend is designed for efficiency, security, and extensibility.

---

## ✅ Features

✔️ User registration & login (with role-based access)
✔️ JWT authentication & secure session handling
✔️ Appointment creation and management
✔️ Prescription generation and retrieval
✔️ Pharmacy dashboard access to prescriptions
✔️ Admin controls for users and analytics
✔️ Modular, clean codebase using MVC pattern
✔️ MongoDB models for scalability and flexibility

---

## 📡 API Endpoints

Here’s a sample of the core REST endpoints:

```
POST   /api/auth/register          # Register a new user (patient, doctor, etc.)
POST   /api/auth/login             # Login and receive JWT token
GET    /api/user/profile           # Get logged-in user's profile
POST   /api/appointments/book      # Book an appointment with a doctor
GET    /api/appointments/list      # View appointments (filtered by user role)
POST   /api/prescriptions/create   # Doctor creates a prescription
GET    /api/prescriptions/:id      # View prescription details
GET    /api/admin/users            # Admin can view all users
```

(🔒 JWT Auth required for protected routes)

---

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
https://github.com/vivekbargude/Medihub_Backend.git
cd Medihub_Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following values:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 🚀 Usage

Start the backend server with:

```bash
npm run dev
```

The server will be accessible at:
📍 `http://localhost:5000/`

Make requests using Postman or integrate with the frontend app (e.g., MediHub Flutter).

---

## 🧠 Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB ODM
* **JWT** – Token-based authentication
* **Dotenv** – Environment variable management
* **Nodemon** – Dev server auto-restart
* **Cors & Helmet** – Security middleware

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new feature or fix branch
3. Make your changes
4. Test the functionality
5. Submit a pull request

---

## 🙌 Credits

Developed by: Vivek Bargude
Part of the full-stack MediHub healthcare management system.

