# 📈 React Stock Monitoring App

A dynamic and interactive web application that allows users to track weekly stock prices through a customizable line chart. Users can toggle individual stocks on and off, view the most recent stock price, and manage the display of data in an intuitive UI.

---

## 🔧 Technologies Used

### 🖥️ Frontend

- **React** – Component-based UI
- **JavaScript (ES6+)** – Application logic and API handling
- **Recharts** – Line graph visualizations
- **Material UI** – UI components (e.g., toggle switches)
- **CSS** – Responsive layout and styling

### 🌐 Backend (assumed)

- **Node.js** with **Express** – Serves API endpoints (`/stocks`, `/stocks/:id/prices`)

---

## 📦 Features

| Feature                             | Description                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| 📈**Interactive Line Graph**  | Visualizes weekly price trends for selected stocks          |
| ✅**Toggle Stock Visibility** | Users can select/deselect stocks to show in the graph       |
| 🧹**Clear All Toggle**        | Instantly deselects all stocks                              |
| 📊**Latest Price Display**    | Shows the most recent price per stock                       |
| 🔁**Alternating Row Styling** | Enhances readability in the stock list                      |
| 📜**Scrollable Stock Panel**  | Automatically adjusts to screen height with scroll overflow |

---

## 🛣️ API Endpoints

| Endpoint               | Method | Description                                  |
| ---------------------- | ------ | -------------------------------------------- |
| `/stocks`            | GET    | Returns all available stocks (ID and name)   |
| `/stocks/:id/prices` | GET    | Returns historical weekly prices for a stock |

> 💡 API data is fetched dynamically using the Fetch API.

---

## 🗃️ Suggested Database Schema

```sql
-- Stocks table
CREATE TABLE stocks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Stock Prices table
CREATE TABLE stock_prices (
    id SERIAL PRIMARY KEY,
    stock_id INTEGER REFERENCES stocks(id),
    week INTEGER NOT NULL,
    price FLOAT NOT NULL
);
```
