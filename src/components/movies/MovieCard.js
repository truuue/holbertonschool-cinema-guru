import React, { useState, useEffect } from "react";
import "./movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const [favoritesRes, watchLaterRes] = await Promise.all([
          axios.get("/api/titles/favorite/"),
          axios.get("/api/titles/watchlater/"),
        ]);
        setIsFavorite(favoritesRes.data.some(item => item.imdbId === movie.imdbId));
        setIsWatchLater(watchLaterRes.data.some(item => item.imdbId === movie.imdbId));
      } catch (error) {
        console.error("Erreur lors de la récupération des listes utilisateur:", error);
      }
    };
    fetchUserLists();
  }, [movie.imdbId]);

  const handleClick = async type => {
    try {
      const isCurrentlySelected = type === 'favorite' ? isFavorite : isWatchLater;
      const method = isCurrentlySelected ? 'delete' : 'post';
      
      await axios[method](`/api/titles/${type}/${movie.imdbId}`);
      
      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error('Error updating movie list:', error);
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-actions">
        <FontAwesomeIcon
          icon={faStar}
          className={`movie-action-icon ${isFavorite ? 'active' : ''}`}
          onClick={() => handleClick('favorite')}
        />
        <FontAwesomeIcon
          icon={faClock}
          className={`movie-action-icon ${isWatchLater ? 'active' : ''}`}
          onClick={() => handleClick('watchlater')}
        />
      </div>
      
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-synopsis">{movie.synopsis}</p>
      
      <div className="movie-genres">
        {movie.genres.map((genre, index) => (
          <span key={index} className="tag">
            {genre}
          </span>
        ))}
      </div>
    </li>
  );
};

export default MovieCard;
