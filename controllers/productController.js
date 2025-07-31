import db from '../config/db.js';

// Get all products
export const getProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Add product
export const addProduct = (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !price) return res.status(400).json({ error: 'Missing name or price' });

  const sql = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
  db.query(sql, [name, description, price], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, name, description, price });
  });
};


// Update product
export const updateProduct = (req, res) => {
  const { name, description, price } = req.body;
  const { id } = req.params;

  const sql = 'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?';
  db.query(sql, [name, description, price, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product updated' });
  });
};

// Delete product
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product deleted' });
  });
};
