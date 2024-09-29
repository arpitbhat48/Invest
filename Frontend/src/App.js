import React, { useState, useEffect } from 'react';
import Header from './Header';
import Stocks from './Stocks';
import Controls from './Controls';
import LineGraph from './LineGraph';

import './Styles/App.css';

function App() {
	// State to store all stocks and selected stock data
	const [stocks, setStocks] = useState([]);
	const [selectedStocks, setSelectedStocks] = useState([]);
	
	    // Fetch all stocks on component mount
		useEffect(() => {
			fetch('http://localhost:5000/stocks')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					// console.log("data", data)
					setStocks(data);  
				})
				.catch(error => {
					console.error('Error fetching stocks:', error);
				});
		}, []);

		const handleStockToggle = async (stockId, stockName) => {
			const alreadySelected = selectedStocks.find(stock => stock.id === stockId);
			
		
			if (alreadySelected) {
				setSelectedStocks(prevStocks => prevStocks.filter(stock => stock.id !== stockId));
			} else {
				try {
					const response = await fetch(`http://localhost:5000/stocks/${stockId}/prices`);
					const stockData = await response.json();

					// Map stockData to only include price and week fields
					const priceData = stockData.map(item => ({
						price: item.price,
						week: item.week
					}));

					// console.log("stockData",stockData);
					setSelectedStocks(prevStocks => [
						...prevStocks,
						{ id: stockId, stockName:stockData[0].stock_name, data: priceData }  // Include stock name
					]);
				} catch (error) {
					console.error('Error fetching stock prices:', error);
				}
			}
		};

	return (
		<div className="App">
			<Header />
			<div className="content-container">
				<div className="left-container">
					<LineGraph selectedStocks={selectedStocks} />
					<Controls />
				</div>
				<Stocks 
					stocks={stocks}
					selectedStocks={selectedStocks}
					onToggle={(stockId, stockName) => handleStockToggle(stockId, stockName)}  // Pass stock name
				/>
			</div>
		</div>
	);
}

export default App;