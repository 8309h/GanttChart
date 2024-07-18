const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router =   require('./routes/taskRoutes')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/tasks',router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
