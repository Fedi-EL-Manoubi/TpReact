const express = require('express');
const { signup, login } = require('../services/authService');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const result = await signup(req.body);
    res.status(201).json({ message: 'Inscription réussie', result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const result = await login(req.body);
    res.status(200).json({ message: 'Connexion réussie', result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;