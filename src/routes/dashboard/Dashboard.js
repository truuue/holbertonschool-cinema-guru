import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* Ajoutez ici d'autres composants ou éléments du tableau de bord */}
    </div>
  );
};

export default Dashboard;
