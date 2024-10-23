import React from "react";
import "./components.css";

const Activity = ({ activity }) => {
  const formatActivityText = activity => {
    const { user, action, target } = activity;

    // Formatage du texte de l'activité
    let formattedText = `${user} a `;

    switch (action) {
      case "like":
        formattedText += `aimé ${target}`;
        break;
      case "comment":
        formattedText += `commenté sur ${target}`;
        break;
      case "share":
        formattedText += `partagé ${target}`;
        break;
      default:
        formattedText += `${action} ${target}`;
    }

    return formattedText;
  };

  return (
    <li className="activity-item">
      <p className="activity-text">{formatActivityText(activity)}</p>
    </li>
  );
};

export default Activity;
