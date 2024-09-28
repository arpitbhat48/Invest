-- Insert 5 stocks into the stocks table
INSERT INTO stocks (stock_name) VALUES ('stockA');
INSERT INTO stocks (stock_name) VALUES ('stockB');
INSERT INTO stocks (stock_name) VALUES ('stockC');
INSERT INTO stocks (stock_name) VALUES ('stockD');
INSERT INTO stocks (stock_name) VALUES ('stockE');



-- Insert 8-10 weeks of stock prices for each stock

-- Prices for stockA (stock_id = 1)
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 45.50, 1);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 50.75, 2);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 47.20, 3);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 55.80, 4);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 60.30, 5);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 58.90, 6);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 63.45, 7);
INSERT INTO stock_prices (stock_id, price, week) VALUES (1, 65.75, 8);

-- Prices for stockB (stock_id = 2)
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 25.00, 1);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 30.10, 2);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 28.90, 3);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 35.75, 4);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 38.40, 5);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 40.10, 6);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 42.50, 7);
INSERT INTO stock_prices (stock_id, price, week) VALUES (2, 45.25, 8);

-- Prices for stockC (stock_id = 3)
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 70.00, 1);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 65.80, 2);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 72.50, 3);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 68.90, 4);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 75.60, 5);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 78.00, 6);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 81.20, 7);
INSERT INTO stock_prices (stock_id, price, week) VALUES (3, 85.00, 8);

-- Prices for stockD (stock_id = 4)
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 15.20, 1);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 18.50, 2);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 20.75, 3);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 23.40, 4);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 26.00, 5);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 28.90, 6);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 30.50, 7);
INSERT INTO stock_prices (stock_id, price, week) VALUES (4, 32.75, 8);

-- Prices for stockE (stock_id = 5)
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 90.50, 1);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 85.20, 2);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 87.90, 3);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 88.60, 4);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 92.75, 5);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 95.80, 6);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 97.50, 7);
INSERT INTO stock_prices (stock_id, price, week) VALUES (5, 99.00, 8);
