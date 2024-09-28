import React from 'react';

const Trends = ({ selectedStock}) => {
	return (
		<div className="trends">
			<h2>Trends</h2>
			<p>Selected Stock: {selectedStock}</p>

		</div>
	);
};

export default Trends;