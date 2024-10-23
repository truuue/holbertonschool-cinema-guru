import React, { useState } from "react";
import "./auth.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Inscription réussie !");
      } else {
        const data = await response.json();
        setError(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setError("Erreur de connexion au serveur");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Choisir un nom d'utilisateur"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Choisir un mot de passe"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit" className="auth-submit">
        S'inscrire
      </button>
    </form>
  );
};

export default Register;
