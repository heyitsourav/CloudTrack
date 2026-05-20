const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  empId: {
    type: String,
    unique: true
  },
  dept: String,
  role: String,
  email: String,

  joiningDate: {
    type: String,
    default: () => new Date().toISOString().split('T')[0]
  }
});

module.exports = mongoose.model('Employee', employeeSchema);