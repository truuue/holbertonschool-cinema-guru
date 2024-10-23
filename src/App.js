import React, { useState, useEffect } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard'; // À décommenter plus tard
// import Authentication from './components/Authentication'; // À décommenter plus tard
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(error => {
        console.error('Erreur d\'authentification:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <p>Tableau de bord à implémenter</p>
        // <Dashboard username={userUsername} />
      ) : (
        <p>Authentification à implémenter</p>
        // <Authentication />
      )}
    </div>
  );
}

export default App;
