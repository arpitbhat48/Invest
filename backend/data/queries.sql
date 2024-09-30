SELECT price, week 
FROM stock_prices
WHERE stock_id = 4
ORDER BY week DESC  -- Get the latest weeks first
LIMIT 10;  -- Limit to the last 10 weeks


SELECT stock_id, price 
FROM stock_prices
WHERE week = 35.00
ORDER BY week DESC;  -- Get the latest weeks first  -- Limit to the last 10 weeks

