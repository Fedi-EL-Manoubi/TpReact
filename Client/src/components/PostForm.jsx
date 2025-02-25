import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function PostForm() {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!isLoggedIn) {
      setError('Vous devez être connecté pour publier un post.');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Assurez-vous que le token est stocké dans le localStorage après la connexion
      const response = await axios.post(
        'http://localhost:3000/api/posts',
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Post créé avec succès:', response.data);
      setContent(''); // Réinitialiser le champ de texte après la publication
    } catch (error) {
      console.error('Erreur lors de la création du post:', error);
      setError('Erreur lors de la création du post.');
    }
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Quoi de neuf ?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        <button type="submit" className="btn btn-primary mt-2">
          Publier
        </button>
      </form>
    </div>
  );
}

export default PostForm;