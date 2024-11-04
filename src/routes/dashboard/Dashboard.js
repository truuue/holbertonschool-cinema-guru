import React from 'react';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import './dashboard.css';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard">
      <Header 
        userUsername={userUsername}
        setIsLoggedIn={setIsLoggedIn}
      />
      <SideBar />
      <div className="dashboard-content">
        {/* Le contenu du dashboard sera ajouté ici dans les prochaines tâches */}
      </div>
    </div>
  );
}

export default Dashboard;
