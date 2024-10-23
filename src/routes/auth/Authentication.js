import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './auth.css';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button 
          className={`auth-button ${_switch ? 'active' : ''}`}
          onClick={() => setSwitch(true)}
        >
          Se connecter
        </button>
        <button 
          className={`auth-button ${!_switch ? 'active' : ''}`}
          onClick={() => setSwitch(false)}
        >
          S'inscrire
        </button>
      </div>
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
    </div>
  );
};

export default Authentication;
