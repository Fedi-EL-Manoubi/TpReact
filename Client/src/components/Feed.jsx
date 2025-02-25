// Feed.jsx
import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

function Feed() {
  const posts = [
    {
      id: 1,
      username: "Elon Musk",
      content: "Je viens de lancer une fusée dans l'espace ! 🚀",
      date: "2023-10-26T10:00:00.000Z",
      likes: 1200,
      comments: [
        {
          username: "Jeff Bezos",
          content: "Tu es toujours en train de jouer avec tes fusées ! 😂",
        },
        {
          username: "Bill Gates",
          content: "Impressionnant ! 👏",
        },
      ],
    },
    {
      id: 2,
      username: "Mark Zuckerberg",
      content: "Le métavers est l'avenir d'Internet ! ✨",
      date: "2023-10-25T15:30:00.000Z",
      likes: 500,
      comments: [
        {
          username: "Sundar Pichai",
          content: "Je suis d'accord, le métavers a un énorme potentiel.",
        },
      ],
    },
    {
      id: 3,
      username: "Bill Gates",
      content: "J'ai investi dans une nouvelle startup qui développe des vaccins contre le paludisme. 💉",
      date: "2023-10-24T09:15:00.000Z",
      likes: 800,
      comments: [], // Initialisation du tableau comments
    },
  ]; // Placez les données ici, à l'intérieur du composant Feed

  return (
    <div className="container mt-4">
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Feed;