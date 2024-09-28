CREATE TABLE stocks (
	id SERIAL PRIMARY KEY,
	stock_name VARCHAR(50)
);

CREATE TABLE stock_prices (
	id SERIAL PRIMARY KEY,
	stock_id INT REFERENCES stocks(id),
	price DECIMAL(10, 2),
	week DECIMAL(6, 2)
);
