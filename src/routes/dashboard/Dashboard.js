import React from 'react';
import SideBar from '../../components/navigation/SideBar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <main className="dashboard-content">
        {/* Contenu principal du tableau de bord */}
      </main>
    </div>
  );
};

export default Dashboard;
