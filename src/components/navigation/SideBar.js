import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Activity from "../Activity";
import "./navigation.css";

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("/api/activity");
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  const setPage = (pageName) => {
    setSelected(pageName);
    switch (pageName) {
      case "home":
        navigate("/home");
        break;
      case "favorites":
        navigate("/favorites");
        break;
      case "watchlater":
        navigate("/watchlater");
        break;
      default:
        navigate("/home");
    }
  };

  return (
    <nav className={`sidebar ${small ? "small" : ""}`}>
      <ul className="nav-list">
        <li 
          className={`nav-item ${selected === "home" ? "selected" : ""}`}
          onClick={() => setPage("home")}
        >
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          {!small && "Accueil"}
        </li>
        <li 
          className={`nav-item ${selected === "favorites" ? "selected" : ""}`}
          onClick={() => setPage("favorites")}
        >
          <FontAwesomeIcon icon={faStar} className="nav-icon" />
          {!small && "Favoris"}
        </li>
        <li 
          className={`nav-item ${selected === "watchlater" ? "selected" : ""}`}
          onClick={() => setPage("watchlater")}
        >
          <FontAwesomeIcon icon={faClock} className="nav-icon" />
          {!small && "À voir plus tard"}
        </li>
      </ul>

      {!small && (
        <div className="activities-section">
          <div className="activities-header">
            <h3>Activités récentes</h3>
            <FontAwesomeIcon 
              icon={showActivities ? faChevronDown : faChevronRight}
              onClick={() => setShowActivities(!showActivities)}
              style={{ cursor: "pointer" }}
            />
          </div>
          {showActivities && (
            <ul className="activities-list">
              {activities.slice(0, 10).map((activity, index) => (
                <Activity key={index} activity={activity} />
              ))}
            </ul>
          )}
        </div>
      )}

      <div 
        className="sidebar-toggle"
        onClick={() => setSmall(!small)}
      >
        <FontAwesomeIcon icon={small ? faChevronRight : faChevronLeft} />
      </div>
    </nav>
  );
};

export default SideBar;
