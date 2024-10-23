import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Activity from "../Activity";
import "./navigation.css";

const SideBar = () => {
  const [small, setSmall] = useState(false);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = pageName => {
    switch (pageName) {
      case "Home":
        navigate("/home");
        break;
      case "Favorites":
        navigate("/favorites");
        break;
      case "Watch Later":
        navigate("/watchlater");
        break;
      default:
        navigate("/home");
    }
  };

  useEffect(() => {
    axios
      .get("/api/activity")
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des activités:", error);
      });
  }, []);

  return (
    <nav className={`sidebar ${small ? "small" : ""}`}>
      <ul className="navigation">
        <li onClick={() => setPage("Home")}>
          <i className="icon-home"></i>
          {!small && <span>Accueil</span>}
        </li>
        <li onClick={() => setPage("Favorites")}>
          <i className="icon-star"></i>
          {!small && <span>Favoris</span>}
        </li>
        <li onClick={() => setPage("Watch Later")}>
          <i className="icon-clock"></i>
          {!small && <span>À regarder plus tard</span>}
        </li>
      </ul>
      <button onClick={() => setShowActivities(!showActivities)}>
        {showActivities ? "Masquer les activités" : "Afficher les activités"}
      </button>
      {showActivities && (
        <ul className="activities">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </ul>
      )}
      <button onClick={() => setSmall(!small)}>{small ? "Agrandir" : "Réduire"}</button>
    </nav>
  );
};

export default SideBar;
