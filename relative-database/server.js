// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const orders = [
  { OrderID: 1, CustomerID: 1, OrderDate: '2024-01-05' },
  // ... 다른 주문 데이터들
];

const orderDetails = [
  { DetailID: 1, OrderID: 1, ProductID: 201, Quantity: 2 },
  // ... 다른 주문 상세 데이터들
];

app.use(cors());

app.get('/order-details/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const orderDetail = orderDetails.find((detail) => detail.OrderID === orderId);

  if (orderDetail) {
    res.json(orderDetail);
  } else {
    res.status(404).json({ error: 'Order detail not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});