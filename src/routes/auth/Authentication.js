import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import './auth.css';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const endpoint = _switch ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(endpoint, {
        username,
        password
      });

      const { accessToken } = response.data;
      
      // Stockage du token
      localStorage.setItem('accessToken', accessToken);
      
      // Mise à jour des états
      setUserUsername(username);
      setIsLoggedIn(true);
      
    } catch (error) {
      setError(error.response?.data?.message || "Une erreur s'est produite");
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <Button 
          label="Sign In"
          onClick={() => setSwitch(true)}
          className={_switch ? 'active' : ''}
        />
        <Button 
          label="Sign Up"
          onClick={() => setSwitch(false)}
          className={!_switch ? 'active' : ''}
        />
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
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
}

export default Authentication;
