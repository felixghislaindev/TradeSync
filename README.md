# TradeSync

TradeSync is a powerful trade copier app designed to help users copy their trades seamlessly from TradingView to other trading platforms like OANDA and cTrader. The application allows users to automate their trading process by syncing their trade alerts with their trading accounts.

## Features

- **Copy trades from TradingView**: Easily sync your trades from TradingView alerts to platforms like OANDA and cTrader.
- **Real-time trade execution**: Instantly execute trades on the selected platforms when TradingView alerts are triggered.
- **User authentication**: Secure user login and authentication for managing trades and account settings.
- **Cross-platform support**: Designed to work with major trading platforms such as OANDA and cTrader.
- **Customizable settings**: Configure your copy trade settings to fit your strategy and preferences.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React.js, Tailwind CSS
- **Database**: MongoDB (or Supabase)
- **Authentication**: JWT (JSON Web Tokens)
- **API Integrations**: TradingView Webhooks, OANDA API, cTrader API
- **Hosting**: Vercel (for backend), GitHub (for version control)

## Installation

### Prerequisites

Before you start, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or [Supabase](https://supabase.io/) (for database)

### Steps to Set Up

1. Clone the repository:
   ```bash
   git clone https://github.com/felixghislaindev/TradeSync-backend.git
   cd TradeSync-backend
