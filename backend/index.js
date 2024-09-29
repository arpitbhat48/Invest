const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');  // Assuming you have your PostgreSQL pool setup here

// Middleware
app.use(cors());
app.use(express.json());  // For parsing JSON request bodies

// Route to get all stocks
app.get('/stocks', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, stock_name FROM stocks');
    res.json(result.rows);  // Send back the stock data
  } catch (error) {
    console.error('Error fetching stocks:', error);
    res.status(500).send('Server error');
  }
});

// Route to get the last 10 weeks of stock prices for a specific stock
app.get('/stocks/:id/prices', async (req, res) => {
  const stockId = req.params.id;
  
  try {
    const result = await pool.query(`
		SELECT stocks.stock_name, stock_prices.price, stock_prices.week 
			FROM stock_prices 
			JOIN stocks ON stock_prices.stock_id = stocks.id 
			WHERE stocks.id = $1
			ORDER BY stock_prices.week DESC
			LIMIT 10;
    `, [stockId]);

    // Return the sorted data for the last 10 weeks
    res.json(result.rows.reverse());  // Reverse to make it ascending from oldest to newest
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    res.status(500).send('Server error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
