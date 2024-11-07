// /controllers/tradeController.js

const { placeTrade } = require('../services/oandaService');

exports.createTrade = async (req, res) => {
    const { symbol, amount, action, price } = req.body;

    try {
        // Validate input
        if (!symbol || !amount || !action || !price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Call the service to place a trade on OANDA
        const result = await placeTrade(symbol, amount, action, price);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to place trade', details: error.message });
    }
};
