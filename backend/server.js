const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Import routes
const authRoutes = require('./routes/auth');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.VITE_CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Routes
app.use('/api/v1/auth', require("./routes/auth"));

// Default route
app.get('/', (req, res) => {
  res.send('Art & Crafts Marketplace API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
