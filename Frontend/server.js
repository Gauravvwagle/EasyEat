const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const menuItems = [
  { id: 1, name: 'Cheese Burger', price: 8.99, description: 'Classic burger with cheese, lettuce, tomato, and sauce.' },
  { id: 2, name: 'Margherita Pizza', price: 12.49, description: 'Fresh tomato, mozzarella, and basil on a crisp crust.' },
  { id: 3, name: 'Chicken Wrap', price: 9.5, description: 'Grilled chicken, veggies, and creamy dressing in a warm wrap.' },
  { id: 4, name: 'French Fries', price: 4.75, description: 'Crispy golden fries with a hint of salt.' }
];

const orders = [];
let nextOrderId = 1;

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', service: 'EasyEat backend', version: '1.0.0' });
});

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/order', (req, res) => {
  const { customer, items, total } = req.body;
  if (!customer || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'customer and items are required' });
  }

  const order = {
    id: nextOrderId++,
    customer,
    items,
    total: total || items.reduce((sum, item) => sum + (item.price || 0), 0),
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  orders.push(order);
  res.status(201).json(order);
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  if (email === 'user@example.com' && password === 'password') {
    return res.json({ token: 'demo-token', user: { email, name: 'Demo User' } });
  }

  res.status(401).json({ error: 'Invalid email or password' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(EasyEat backend running on http://localhost:);
});
