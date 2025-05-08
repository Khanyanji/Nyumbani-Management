// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

// Database connection check
db.raw('SELECT 1')
  .then(() => console.log('MySQL connected'))
  .catch(err => {
    console.error('MySQL connection failed:', err);
    process.exit(1);
 // Error handling
app.use(errorHandler);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));