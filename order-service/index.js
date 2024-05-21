const express = require('express');
const app = express();

const orders = [
  { id: 1, productName: 'Product A', userName: 'Alice' },
  { id: 2, productName: 'Product B', userName: 'Bob' }
];

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.listen(3000, () => {
  console.log('Order service listening on port 3000');
});
