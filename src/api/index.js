const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'blog_platform',
  password: 'your_password',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Users API
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
  res.status(201).json(result.rows[0]);
});

// Posts API
app.post('/api/posts', async (req, res) => {
  const { title, content, userId, categoryId } = req.body;
  const result = await pool.query('INSERT INTO posts (title, content, user_id, category_id) VALUES ($1, $2, $3, $4) RETURNING *', [title, content, userId, categoryId]);
  res.status(201).json(result.rows[0]);
});

app.get('/api/posts', async (req, res) => {
  const result = await pool.query('SELECT * FROM posts');
  res.json(result.rows);
});

// Comments API
app.post('/api/comments', async (req, res) => {
  const { postId, userId, content } = req.body;
  const result = await pool.query('INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *', [postId, userId, content]);
  res.status(201).json(result.rows[0]);
});

// Categories API
app.post('/api/categories', async (req, res) => {
  const { name } = req.body;
  const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
  res.status(201).json(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});