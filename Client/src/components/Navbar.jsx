import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const isLoggedIn = true; // Remplacez par la logique de connexion réelle
  const username = "Utilisateur"; // Remplacez par le nom d'utilisateur réel

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TP réseau Social</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            {isLoggedIn ? ( // Si l'utilisateur est connecté
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profil ({username})</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={() => { /* Logique de déconnexion */ }}>
                    Déconnexion
                  </button>
                </li>
              </>
            ) : ( // Si l'utilisateur n'est pas connecté
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Connexion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Inscription</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;