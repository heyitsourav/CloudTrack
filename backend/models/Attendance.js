const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  empId: String,
  status: String,
  date: String,

  userId: String  
});

module.exports = mongoose.model('Attendance', attendanceSchema);