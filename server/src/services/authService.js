const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Charger les variables d'environnement

const JWT_SECRET = process.env.JWT_SECRET;

async function signup(userData) {
  try {
    const existingUser = await userModel.findUserByUsername(userData.username);
    if (existingUser) {
      throw new Error('Nom utilisateur déjà utilisé');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    await userModel.createUser({
      ...userData,
      password: hashedPassword,
    });
    return { message: 'Inscription réussie' };
  } catch (error) {
    throw new Error('Erreur lors de inscription');
  }
}

async function login(credentials) {
  try {
    const user = await userModel.findUserByUsername(credentials.username);
    if (!user) {
      throw new Error('Nom utilisateur ou mot de passe incorrect');
    }
    const isMatch = await bcrypt.compare(credentials.password, user.password);
    if (!isMatch) {
      throw new Error('Nom utilisateur ou mot de passe incorrect');
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    return { token };
  } catch (error) {
    throw new Error('Erreur lors de la connexion');
  }
}

module.exports = { signup, login };