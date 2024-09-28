import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

function LineGraph({ selectedStocks }) {
	// Combine all selected stocks' data by week and ensure week and price are numbers
	const data = [];
	selectedStocks.forEach(stock => {
	stock.prices.forEach((priceData, index) => {
		// Parse the week and price as numbers
		const week = parseFloat(priceData.week);
		const price = parseFloat(priceData.price);

		// Check if this week already exists in the data array
		if (!data[index]) {
		data[index] = { week };
		}

		// Add the stock's price data under its name
		data[index][stock.stock_name] = price;
	});
	});

	return (
	<LineChart
		width={500}
		height={300}
		data={data}
		margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
	>
		<XAxis dataKey="week" />
		<YAxis />
		<CartesianGrid strokeDasharray="3 3" />
		<Tooltip />
		<Legend />
		{selectedStocks.map(stock => (
		<Line 
			key={stock.stock_name} 
			type="monotone" 
			dataKey={stock.stock_name} 
			stroke="#8884d8" 
			activeDot={{ r: 8 }} 
		/>
		))}
	</LineChart>
	);
}

export default LineGraph;
