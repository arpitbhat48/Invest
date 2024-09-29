import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LineGraph({ selectedStocks }) {
    // Prepare data in the format required by Recharts
    const chartData = [];
	console.log("LineGraph selectedStocks: ", selectedStocks);
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
				<p>{`Week: ${label}`}</p>
				{payload.map((entry) => (
					<p key={entry.name} style={{ color: entry.stroke }}>
					{`${entry.name}: ${parseInt(entry.value)}`}
					</p>
				))}
				</div>
			);
		}
		return null;
	};

	// Collect the last 10 weeks from all selected stocks into a unified array
	selectedStocks.forEach((stock, index) => {
		stock.data.forEach((point, weekIndex) => {
			// Ensure a data entry exists for each week
			if (!chartData[weekIndex]) {
				chartData[weekIndex] = { week: Math.round(point.week) };
			}

			// Add the price for this stock to the data entry for this week
			chartData[weekIndex][`stock${index + 1}`] = point.price;
		});
	});

	return (
		<LineChart
			width={1800}
			height={1000}
			data={chartData}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid stroke="#ccc" strokeWidth="2"/>
			<XAxis dataKey="week" />
			<YAxis />
			<Tooltip content={<CustomTooltip />} />
			<Legend />

			{/* Plot a line for each stock */}
			{selectedStocks.map((stock, index) => (
				<Line
					key={stock.id}
					type="linear"
					dataKey={`stock${index + 1}`}
					stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}  // Random color for each line
					activeDot={{ r: 10 }}
					strokeWidth={3}
				/>
			))}
		</LineChart>
	);
}

export default LineGraph;
