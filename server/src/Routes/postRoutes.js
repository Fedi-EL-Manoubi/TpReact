const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware'); // Assurez-vous que le chemin est correct

const router = express.Router();

router.get('/', getPosts);
router.post('/', authMiddleware, createPost); // Utilisez le middleware d'authentification pour protéger la route de création de post

module.exports = router;