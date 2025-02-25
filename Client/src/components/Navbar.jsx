import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../contexts/AuthContext.jsx'; // Assurez-vous que le chemin est correct

function Navbar() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirige vers la page de connexion après la déconnexion
  };

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
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Accueil
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? ( // Si l'utilisateur est connecté
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <FontAwesomeIcon icon={faUser} /> Profil ({username})
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Déconnexion
                  </button>
                </li>
              </>
            ) : ( // Si l'utilisateur n'est pas connecté
              <>
                <li className="nav-item me-2">
                  <Link className="nav-link" to="/login">
                    <FontAwesomeIcon icon={faSignInAlt} /> Connexion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <FontAwesomeIcon icon={faUserPlus} /> Inscription
                  </Link>
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