import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Stocks from './Stocks';
import LineGraph from './LineGraph';
import Controls from './Controls';

import './Styles/App.css';

function App() {
	const [stocks, setStocks] = useState([]);
	const [selectedStocks, setSelectedStocks] = useState([]);

	// Fetch data from backend when the component mounts
	useEffect(() => {
	axios.get('http://localhost:5000/api/stocks')
	.then(response => {
			setStocks(response.data);  // Set the stock data from PostgreSQL
		})
		.catch(error => {
			console.error('Error fetching stocks:', error);
		});
	}, []);

	// Handle stock selection/deselection for graph
	const handleStockToggle = (stockName, isSelected) => {
		const selectedStock = stocks.find(s => s.stock_name === stockName);  // Find the selected stock from the stocks list
		if (isSelected) {
			// If stock is selected, add it to selectedStocks
			setSelectedStocks(prev => [...prev, selectedStock]);
		} else {
			// If stock is deselected, remove it from selectedStocks
			setSelectedStocks(prev => prev.filter(stock => stock.stock_name !== stockName));
		}
	};
	console.log(stocks);
	console.log('Selected Stocks:', selectedStocks);

	return (
		<div className="App">
			<Header />
			<div className="content-container">
				<div className="left-container">
					<LineGraph selectedStocks={selectedStocks} />
					<Controls />
				</div>
				<Stocks stocks={stocks} onStockToggle={handleStockToggle} />
			</div>
		</div>
	);
}

export default App;
