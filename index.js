const houseRoutes = require('./routes/houseRoutes.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');
const { PORT } = require('./config/index.js');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/houses', houseRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});