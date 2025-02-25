import React, { useState } from 'react';

function PostForm() {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer la nouvelle publication au serveur
    // ...
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
        <button type="submit" className="btn btn-primary">
          Publier
        </button>
      </form>
    </div>
  );
}

export default PostForm;