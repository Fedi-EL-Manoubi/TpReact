const postService = require('../services/postService');

const getPosts = async (req, res) => {
  try {
    const [rows] = await postService.getPosts();
    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error);
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.id; // Assurez-vous que l'ID de l'utilisateur est disponible dans req.user après l'authentification
    const post = await postService.createPost(userId, content);
    res.status(201).json(post);
  } catch (error) {
    console.error('Erreur lors de la création du post:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPosts, createPost };