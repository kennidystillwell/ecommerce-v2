const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.route('/api/products')
  .get((req, res) => {
    let sql = 'SELECT * FROM products';

    const sortBy = req.query.sortBy;

    if (sortBy === 'priceDesc') {
      sql += ' ORDER BY price DESC';
    } else if (sortBy === 'priceAsc') {
      sql += ' ORDER BY price ASC';
    }

    console.log('SQL query:', sql);

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: err.message });
      } else {
        console.log('Fetched products:', result);
        res.json(result);
      }
    });
  });

app.options((req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET');
    res.sendStatus(200);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});