// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customerRoutes.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // ✅ Use built-in JSON parser instead of body-parser

// ✅ Routes
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes); // Add this line

app.get('/', (req, res) => {
  res.send('Customer Management API');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
