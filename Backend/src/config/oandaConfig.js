// /config/oandaConfig.js

module.exports = {
    OANDA_API_KEY: process.env.OANDA_API_KEY, // API key from OANDA (stored in .env)
    OANDA_ACCOUNT_ID: process.env.OANDA_ACCOUNT_ID, // OANDA account ID
    OANDA_API_URL: 'https://api-fxpractice.oanda.com/v3/accounts/YOUR_ACCOUNT_ID/orders'
};
