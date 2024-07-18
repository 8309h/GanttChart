const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  startDate: Date,
  endDate: Date,
  duration: Number
});

module.exports = mongoose.model('Task', taskSchema);
