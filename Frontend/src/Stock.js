import React, { useState } from 'react';
import Switch from '@mui/material/Switch'; // Import a Switch component from Material-UI

import './Styles/Stock.css';

function Stock({ stockName, onToggle }) {
	const [isSelected, setIsSelected] = useState(false);

  // Handle switch toggle and trigger callback
	const handleToggle = () => {
		setIsSelected(!isSelected);  // Toggle the switch state
		onToggle(stockName, !isSelected);  // Pass the updated state to parent (App.js)
	};

	return (
		<div className="stock-item">
			<span>{stockName}</span>

			<Switch 
			checked={isSelected} 
			onChange={handleToggle} 
			color="primary"
			size="small" 
			/>
		</div>
	);
}

export default Stock;