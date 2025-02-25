import React from 'react';

function Profile() {
  const user = {
    username: "Elon Musk",
    description: "Entrepreneur, investisseur et inventeur. PDG de Tesla et SpaceX.",
    posts: [
      // ... (publications de l'utilisateur)
    ]
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{user.username}</h2>
      <p>{user.description}</p>
      <hr />
      <h3>Publications</h3>
      {/* Afficher les publications de l'utilisateur */}
      {user.posts.map((post) => (
        <div key={post.id} className="card mb-3">
          {/* ... (afficher les données de la publication) */}
        </div>
      ))}
    </div>
  );
}

export default Profile;