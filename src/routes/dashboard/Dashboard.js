import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../../components/navigation/SideBar';
import './Dashboard.css';
import HomePage from '../../pages/HomePage';
import Favorites from '../../pages/Favorites';
import WhatchLater from '../../pages/WatchLater';

function Dashboard() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <SideBar />
        <main className="dashboard-content">
          {/* Contenu principal du tableau de bord */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WhatchLater />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
