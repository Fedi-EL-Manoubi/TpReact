// src/services/AuthService.js

const API_URL = 'http://localhost:3000/api/auth'; // Remplacez par l'URL de votre API

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    // Gérez la réponse du serveur (stockez le jeton JWT, etc.)
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    throw error; 
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    // Gérez la réponse du serveur (stockez le jeton JWT, etc.)
    return data;
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    throw error; // Propagez l'erreur pour la gérer dans le composant
  }
};