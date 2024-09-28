const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Create an Express app
const app = express();
app.use(cors()); // Enable CORS to allow requests from React app

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',       // Your PostgreSQL username
  host: 'localhost',       // Where PostgreSQL is running (localhost in most cases)
  database: 'stocks', // Your PostgreSQL database name
  password: 'mysql', // Your PostgreSQL password
  port: 5432,              // Default PostgreSQL port
});

// Endpoint to get stocks and their prices
app.get('/api/stocks', async (req, res) => {
  try {
    // Get all stocks
    const stocksQuery = 'SELECT * FROM stocks';
    const stocksResult = await pool.query(stocksQuery);
    const stocks = stocksResult.rows;

    // Fetch stock prices for each stock
    const stockPricesQuery = `
      SELECT stock_prices.stock_id, stock_prices.price, stock_prices.week
      FROM stock_prices
      JOIN stocks ON stocks.id = stock_prices.stock_id
    `;
    const stockPricesResult = await pool.query(stockPricesQuery);
    const stockPrices = stockPricesResult.rows;

    // Combine stocks with their prices
    const stocksWithPrices = stocks.map(stock => {
      return {
        ...stock,
        prices: stockPrices.filter(price => price.stock_id === stock.id),
      };
    });

    res.json(stocksWithPrices); // Send combined data as JSON response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from database' });
  }
});

// Start the server
const port = 5000; // This will be the backend port (React frontend can be on 3000)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
