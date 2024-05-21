import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then(response => setUsers(response.data));
    axios.get('/api/products').then(response => setProducts(response.data));
    axios.get('/api/orders').then(response => setOrders(response.data));
  }, []);

  return (
    <div>
      <h1>Microservices Application</h1>
      <h2>Users</h2>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
      <h2>Products</h2>
      <ul>{products.map(product => <li key={product.id}>{product.name}</li>)}</ul>
      <h2>Orders</h2>
      <ul>{orders.map(order => <li key={order.id}>{order.productName} - {order.userName}</li>)}</ul>
    </div>
  );
}

export default App;
