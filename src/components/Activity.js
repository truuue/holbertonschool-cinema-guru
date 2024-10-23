import React from "react";
import "./components.css";

const Activity = ({ activity }) => {
  const formatActivityText = activity => {
    // Implémentez la logique pour formater le texte de l'activité selon le design
    // Ceci est un exemple simple, ajustez selon vos besoins
    return `${activity.user} a ${activity.action} ${activity.target}`;
  };

  return (
    <li className="activity-item">
      <p className="activity-text">{formatActivityText(activity)}</p>
    </li>
  );
};

export default Activity;
