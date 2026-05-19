require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');
const Attendance = require('./models/Attendance');
const User = require('./models/User');

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());


app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      email,
      password,
      role: 'employee' 
    });

    await user.save();

    res.json({ message: "Account created successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    token: "abc123",
    userId: user._id,
    role: user.role,
    email: user.email
  });
});



mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ Error:", err));



app.get('/', (req, res) => {
  res.send("🚀 Server running");
});

app.get('/employees', async (req, res) => {
  try {
    const { role, userId } = req.query;

    let data;

    if (role === 'admin') {
      data = await Employee.find();
    } else {
      data = await Employee.find({ userId });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});




app.post('/employees', async (req, res) => {
  try {
    const { userRole } = req.body;

    if (userRole !== 'admin') {
      return res.status(403).json({ message: "Only admin can add employees" });
    }

    const emp = new Employee(req.body);
    await emp.save();

    res.json({ message: "Employee added successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/attendance', async (req, res) => {
  try {
    const { records, userId, role } = req.body;

    for (let record of records) {

      const existing = await Attendance.findOne({
        empId: record.empId,
        date: record.date,
        userId: userId
      });

      if (existing && role !== 'admin') {
        return res.status(403).json({
          message: "Attendance already marked for today"
        });
      }

      await Attendance.findOneAndUpdate(
        {
          empId: record.empId,
          date: record.date,
          userId: userId
        },
        {
          ...record,
          userId
        },
        { upsert: true, new: true }
      );
    }

    res.json({
      message: "Attendance saved successfully"
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🔥 Server started on port", PORT);
});