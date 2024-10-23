import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./auth.css";
import axios from "axios";

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const route = _switch ? "/api/auth/login" : "/api/auth/register";
      const response = await axios.post(route, { username, password });

      const { token } = response.data;
      localStorage.setItem("token", token);

      setUserUsername(username);
      setIsLoggedIn(true);

      // Vous pouvez ajouter ici une redirection ou un message de succès
    } catch (error) {
      console.error("Erreur d'authentification:", error);
      // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button
          className={`auth-button ${_switch ? "active" : ""}`}
          onClick={() => setSwitch(true)}
        >
          Se connecter
        </button>
        <button
          className={`auth-button ${!_switch ? "active" : ""}`}
          onClick={() => setSwitch(false)}
        >
          S'inscrire
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
};

export default Authentication;
