import db from '../config/db.js';

// Get all customers
export const getCustomers = (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add new customer
export const addCustomer = (req, res) => {
  const { name, email, phone } = req.body;
  db.query('INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Customer added successfully' });
  });
};

// Update customer
export const updateCustomer = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  db.query('UPDATE customers SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Customer updated successfully' });
  });
};

// Delete customer
export const deleteCustomer = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM customers WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Customer deleted successfully' });
  });
};
