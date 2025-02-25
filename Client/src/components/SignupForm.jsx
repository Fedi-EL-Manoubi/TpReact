import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/AuthService";
import { AuthContext } from "../contexts/AuthContext";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await signup({ username, email, password });
      setSuccessMessage(response.message);
      console.log("Inscription réussie :", response);
      login(username); // Met à jour l'état de connexion
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // Réinitialiser les champs du formulaire en cas de rafraîchissement de la page
  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center text-primary mb-3">Inscription</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;