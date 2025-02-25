// filepath: /c:/Users/fedid/TpReact/Server/src/services/postService.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'tpreact',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function createPost(userId, content) {
  try {
    const [result] = await pool.query('INSERT INTO posts (userId, content) VALUES (?, ?)', [userId, content]);
    const postId = result.insertId;
    const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [postId]);
    return rows[0];
  } catch (error) {
    console.error('Erreur lors de la création du post:', error);
    throw new Error('Erreur lors de la création du post');
  }
}

module.exports = { createPost };