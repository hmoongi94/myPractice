// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost', // MariaDB 호스트 주소
  user: 'root', // MariaDB 사용자명
  password: 'mariadb', // MariaDB 비밀번호
  database: 'relativedatabasetest' // MariaDB 데이터베이스명
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB');
});

const path = require('path')
const indexPath = path.join(__dirname, './index.html');

app.get('/', (req, res) => {
  res.sendFile(path.join(indexPath));
});

app.post('/orders', (req, res) => {
  const { customerID, orderDate } = req.body;

  // Validate that required fields are present
  if (!customerID || !orderDate) {
    return res.status(400).json({ error: 'CustomerID and OrderDate are required fields.' });
  }

  // Validate that customerID is a valid integer
  if (!Number.isInteger(Number(customerID))) {
    return res.status(400).json({ error: 'CustomerID must be a valid integer.' });
  }

  // Insert new order into the orders table
  const insertQuery = 'INSERT INTO orders (CustomerID, OrderDate) VALUES (?, ?)';
  connection.query(insertQuery, [customerID, orderDate], (error, results) => {
    if (error) {
      console.error('Error adding order to the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const insertedOrderId = results.insertId;
      res.status(201).json({ orderId: insertedOrderId, message: 'Order added successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});