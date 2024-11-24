# Role-Based Access Control UI Dashboard Documentation

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup Instructions](#setup-instructions)  
5. [Usage Guidelines](#usage-guidelines)  
6. [API Endpoints](#api-endpoints)  
7. [Folder Structure](#folder-structure)  
8. [Future Enhancements](#future-enhancements)  

---

## Overview

The **Role-Based Access Control (RBAC) UI Dashboard** is a web application designed for task and user management with secure role-based access. The system includes an admin role that can manage users and tasks, while users have personalized task management capabilities. The dashboard is responsive and built using modern web development technologies.

---

## Features

### Admin Functionalities:
- Add new users to the system.
- Create and assign tasks to users.
- Classify tasks based on priorities (Low, Medium, High).
- Monitor task statuses: **Completed**, **In Progress**.
- Delete and restore tasks.
- Manage sub-tasks for existing tasks.

### User Functionalities:
- View assigned tasks.
- Update task statuses (Completed, In Progress).
- Manage sub-tasks.
- Change login password.

### General Features:
- **Authentication & Authorization**:
  - Secure login with JWT-based authentication.
  - Password encryption using Bcrypt.js.
- **Task Management**:
  - Add, edit, delete, restore tasks.
  - Task priority classification and status tracking.
- **Responsiveness**:
  - Mobile-friendly and desktop-optimized interface.

---

## Technologies Used

- **Frontend**:  
  - HTML  
  - Tailwind CSS  
  - ReactJS  
  - Redux  

- **Backend**:  
  - Node.js  
  - Express  

- **Database**:  
  - MongoDB  

- **Authentication & Security**:  
  - JWT Authentication  
  - Bcrypt.js  

---

## Setup Instructions

### Prerequisites:
- **Node.js** (v14 or later)  
- **MongoDB** (local or cloud-based)  

### Steps:
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/Amritanshu02/Role-Based-Access-Control-UI.git
   cd your-repository-folder
   ```

2. **Install Dependencies**:  
   - Backend:  
     ```bash
     cd server
     npm install
     ```
   - Frontend:  
     ```bash
     cd client
     npm install
     ```

3. **Run the Application**:  
   - Backend:  
     ```bash
     cd server
     npm start
     ```
   - Frontend:  
     ```bash
     cd client
     npm run dev
     ```

4. **Access the Dashboard**:  
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage Guidelines

1. **Admin Login**:  
   Log in using admin credentials to manage users and tasks.
   Mail: admin@gmail.com
   Password: 123456

3. **Add Users**:  
   Navigate to the "Users" section to add new users manually.  

4. **Task Management**:  
   Assign tasks with details like priority, sub-tasks, and deadlines.  

5. **User Interaction**:  
   Users can log in, view their tasks, update statuses, and manage sub-tasks.  

---

## API Endpoints

### Authentication
- `POST /api/auth/login`: User login.  
- `POST /api/auth/register`: Admin registers users.  

### Users
- `GET /api/users`: Fetch all users (Admin only).  
- `PUT /api/users/password`: Update user password.  

### Tasks
- `POST /api/tasks`: Create a new task.  
- `GET /api/tasks`: Fetch tasks (filtered by user/admin).  
- `PUT /api/tasks/:id`: Update task details.  
- `DELETE /api/tasks/:id`: Soft-delete a task.  
- `PATCH /api/tasks/:id/restore`: Restore a deleted task.  

---

## Folder Structure

```
project-folder/
│
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication & Authorization
│   └── server.js        # Entry point
│
├── frontend/
│   ├── src/
│       ├── components/  # React components
│       ├── pages/       # Dashboard and other pages
│       ├── redux/       # Redux setup
│       └── App.js       # Main application file
│
└── README.md            # Documentation
```

---

## Future Enhancements

- Role customization for users.  
- Advanced reporting and analytics.  
- Email notifications for task assignments and updates.  
- Integration with third-party tools like Slack or Microsoft Teams.  

---

For any issues or feature requests, feel free to create a ticket in the repository!
