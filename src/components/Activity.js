import React from 'react';
import './components.css';

function Activity({ activity }) {
  const formatActivity = () => {
    switch (activity.type) {
      case 'FAVORITE':
        return `a ajouté ${activity.movie.title} à ses favoris`;
      case 'WATCHLATER':
        return `a ajouté ${activity.movie.title} à sa liste "À voir plus tard"`;
      case 'RATING':
        return `a noté ${activity.movie.title} ${activity.value} étoiles`;
      default:
        return `a interagi avec ${activity.movie.title}`;
    }
  };

  return (
    <li className="activity-item">
      <p>{activity.username} {formatActivity()}</p>
    </li>
  );
}

export default Activity;
