import React from 'react';
import Switch from '@mui/material/Switch'; // Import a Switch component from Material-UI

import './Styles/Stock.css';

function Stock({ stock, isSelected, onToggle }) {
    return (
        <div className="stock-item">
            <span className="stock-name">{stock.stock_name}</span>
            <Switch
                checked={isSelected}  // Set the checked state based on whether the stock is selected
                onChange={() => onToggle(stock.id)}  // Call the onToggle function with stock id
                color="primary"
				size="small"
            />
        </div>
    );
}

export default Stock;