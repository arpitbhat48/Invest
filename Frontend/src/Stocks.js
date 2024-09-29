import React from 'react';
import Stock from './Stock';

import './Styles/Stock.css';


function Stocks({ stocks, selectedStocks, onToggle }) {
    console.log('Stocks component received stocks:', stocks);  // Debugging log

    return (
        <div className="stocks-container">
            {stocks.length > 0 ? (
                stocks.map(stock => (
                    <Stock
                        key={stock.id}
                        stock={stock}
                        isSelected={selectedStocks.some(s => s.id === stock.id)}
                        onToggle={onToggle}
                    />
                ))
            ) : (
                <p>No stocks available</p>  // To help identify if no data is coming through
            )}
        </div>
    );
}
export default Stocks;
