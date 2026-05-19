# ☁️ CloudTrack - Smart Attendance Management System

CloudTrack is a full-stack Smart Attendance Management System designed to simplify attendance tracking and employee management. It includes role-based authentication, attendance monitoring, and an interactive dashboard for analytics.

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- Role-based access (Admin / Employee)
- Session handling with Local Storage

### 👨‍💼 Admin Features
- Add employees
- Manage employee data
- Mark attendance
- Update attendance records
- View analytics dashboard

### 👤 Employee Features
- Login securely
- View personal dashboard
- Mark attendance once per day
- View attendance status and percentage

### 📊 Dashboard Features
- Total employees
- Present today
- Absent today
- Leave count
- Attendance percentage tracking
- Weekly analytics
- Department-wise insights

### ☁️ Database Features
- MongoDB integration
- User data storage
- Attendance storage
- Employee management

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## 📂 Project Structure

```bash
CloudTrack/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   └── script.js
│
├── models/
│   ├── User.js
│   ├── Employee.js
│   └── Attendance.js
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone repository:

```bash
git clone https://github.com/yourusername/cloudtrack.git
```

Move into project:

```bash
cd cloudtrack
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
node server.js
```

Open in browser:

```bash
http://localhost:5500
```

---

## 📸 Screenshots

Add screenshots here:

- Login Page
- Dashboard
- Employee Directory
- Attendance Page

---

## 🔮 Future Improvements

- JWT Authentication
- Password encryption using bcrypt
- Email notifications
- Profile management
- Dark mode
- Deployment support

---

## 👨‍💻 Author

**Sourav Mahapatra**

B.Tech CSE (AI & ML)

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile
