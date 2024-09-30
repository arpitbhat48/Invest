import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LineGraph({ selectedStocks }) {
    let chartData = [];
	// console.log("LineGraph selectedStocks: ", selectedStocks);

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p>{`Week: ${label}`}</p>
					{payload.map((entry) => (
						<p key={entry.name} style={{ color: entry.stroke }}>
						{`${entry.name}: ${entry.value}`}
						</p>
					))}
				</div>
			);
		}
		return null;
	};

	 // Check if there's any selected stock data
	 if (selectedStocks.length > 0) {
		// Collect the last 10 weeks from all selected stocks into a unified array
		selectedStocks.forEach((stock) => {
			stock.data.forEach((point, weekIndex) => {
				// Ensure a data entry exists for each week
				if (!chartData[weekIndex]) {
					chartData[weekIndex] = { week: Math.round(point.week) };
				}

				// Add the price for this stock to the data entry for this week
				chartData[weekIndex][stock.stockName] = point.price;
			});
		});
	} else {
		 // Fallback data for displaying the grid when no stock is selected
		 chartData = [
            { week: '1' },
            { week: '2' },
            { week: '3' },
            { week: '4' },
            { week: '5' },
            { week: '6' },
            { week: '7' },
            { week: '8' },
            { week: '9' },
            { week: '10' }
        ];
	}

	return (
		<div className="graph-container">
            <ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={1800}
					height={1000}
					data={chartData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid stroke="#ccc" strokeWidth="2"/>
					<XAxis dataKey="week" />
					<YAxis tickCount={5} domain={[0, 100]} tick={{ interval: 25 }} />
					<Tooltip content={<CustomTooltip />} />
					<Legend />

					{selectedStocks.length > 0 ?
						selectedStocks.map((stock) => (
						<Line
							key={stock.id}
							type="linear"
							dataKey={stock.stockName}
							stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}  // Random color for each line
							activeDot={{ r: 8 }}
							strokeWidth={3}
						/>
						)) : null
					}
				</LineChart>
			</ResponsiveContainer>
        </div>
	);
}

export default LineGraph;
