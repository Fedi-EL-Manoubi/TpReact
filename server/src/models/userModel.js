const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'tpreact',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function findUserByUsername(username) {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
}

async function createUser(userData) {
  const { email, username, password } = userData;
  await pool.query('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, password]);
}

module.exports = { findUserByUsername, createUser };