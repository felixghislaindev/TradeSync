// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const tradeRoutes = require('./routes/tradeRoutes');
const appConfig = require('./config/appConfig');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use trade routes
app.use('/api', tradeRoutes);

// Start server
app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
});
