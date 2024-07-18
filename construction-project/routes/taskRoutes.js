const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Calculate the end date based on start date and duration
const calculateEndDate = (startDate, duration) => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + duration);
  return endDate;
};

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  const { task, startDate, duration } = req.body;
  const endDate = calculateEndDate(startDate, duration);
  const newTask = new Task({ task, startDate, endDate, duration });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
