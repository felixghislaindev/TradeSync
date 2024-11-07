// /routes/tradeRoutes.js

const express = require('express');
const router = express.Router();
const { createTrade } = require('../controllers/tradeController');

// POST request to place a trade
router.post('/trade', createTrade);

module.exports = router;
