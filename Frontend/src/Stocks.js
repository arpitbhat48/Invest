import React from 'react';
import Stock from './Stock';

import './Styles/Stock.css';

function Stocks({ stocks, onStockToggle }) {
	return (
		<div className="stocks-container">
			{stocks.map(stock => (
			<Stock 
				key={stock.id} 
				stockName={stock.stock_name} 
				onToggle={onStockToggle}  // Pass the toggle function down
			/>
			))}
		</div>
	);
}

export default Stocks;
