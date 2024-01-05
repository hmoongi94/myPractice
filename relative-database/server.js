// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mysql = require('mysql2');

// const orders = [
//   { OrderID: 1, CustomerID: 1, OrderDate: '2024-01-05' },
//   { OrderID: 2, CustomerID: 5, OrderDate: '2024-01-05' },
//   { OrderID: 3, CustomerID: 6, OrderDate: '2024-01-05' },
//   // ... 다른 주문 데이터들
// ];

// const orderDetails = [
//   { DetailID: 1, OrderID: 1, ProductID: 201, Quantity: 2 },
//   { DetailID: 3, OrderID: 2, ProductID: 203, Quantity: 5 },
//   { DetailID: 5, OrderID: 3, ProductID: 205, Quantity: 3 },
//   // ... 다른 주문 상세 데이터들
// ];

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

app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(indexPath));
});


app.get('/order-details/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const orderDetail = orderDetails.find((detail) => detail.OrderID === orderId);
  const order = orders.find((order) => order.OrderID === orderId);

  if (orderDetail) {
    if (order) {
      // Combine orderDetails and orders information
      const combinedInfo = { ...orderDetail, OrderDate: order.OrderDate, CustomerID: order.CustomerID };
      res.json(combinedInfo);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } else {
    res.status(404).json({ error: 'Order detail not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});