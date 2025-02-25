import React from 'react';
import moment from 'moment'; // Importez moment pour formater la date
import 'moment/locale/fr'; // Importez la locale française pour moment

moment.locale('fr'); // Définissez la locale française pour moment

function Post({ username, content, date, likes, comments }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p className="card-text">{content}</p>
        <small className="text-muted">
          {moment(date).fromNow()}
        </small>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>
            <span className="badge bg-primary">
              {likes} likes
            </span>
          </div>
          <div>
            <button className="btn btn-sm btn-secondary">
              Commenter
            </button>
          </div>
        </div>
        {/* Affichage des commentaires */}
        <div className="mt-3">
          {comments.map((comment, index) => (
            <div key={index} className="border-top pt-2">
              <p>
                <strong>{comment.username} :</strong> {comment.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;