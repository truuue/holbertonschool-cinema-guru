import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <div className="header-user">
        <img 
          src="https://picsum.photos/100/100" 
          alt="avatar"
          className="header-avatar"
        />
        <p className="header-welcome">
          Bienvenue, {userUsername}
        </p>
      </div>
      <span 
        className="header-logout"
        onClick={logout}
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        Déconnexion
      </span>
    </nav>
  );
}

export default Header;
