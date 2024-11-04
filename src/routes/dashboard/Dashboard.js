import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import './dashboard.css';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header 
          userUsername={userUsername}
          setIsLoggedIn={setIsLoggedIn}
        />
        <SideBar />
        <div className="dashboard-content">
          <Routes>
            <Route 
              path="/home" 
              element={<div>HomePage Component à venir</div>} 
            />
            <Route 
              path="/favorites" 
              element={<div>Favorites Component à venir</div>} 
            />
            <Route 
              path="/watchlater" 
              element={<div>WatchLater Component à venir</div>} 
            />
            <Route 
              path="*" 
              element={<Navigate to="/home" replace />} 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
