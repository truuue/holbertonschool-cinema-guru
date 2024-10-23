import React, { useState, useEffect } from 'react';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const [favoritesRes, watchLaterRes] = await Promise.all([
          axios.get('/api/titles/favorite/'),
          axios.get('/api/titles/watchlater/')
        ]);
        setIsFavorite(favoritesRes.data.some(item => item.imdbId === movie.imdbId));
        setIsWatchLater(watchLaterRes.data.some(item => item.imdbId === movie.imdbId));
      } catch (error) {
        console.error('Erreur lors de la récupération des listes utilisateur:', error);
      }
    };
    fetchUserLists();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    try {
      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(`/api/titles/favorite/${movie.imdbId}`);
          setIsFavorite(false);
        } else {
          await axios.post(`/api/titles/favorite/${movie.imdbId}`);
          setIsFavorite(true);
        }
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(`/api/titles/watchlater/${movie.imdbId}`);
          setIsWatchLater(false);
        } else {
          await axios.post(`/api/titles/watchlater/${movie.imdbId}`);
          setIsWatchLater(true);
        }
      }
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de ${type}:`, error);
    }
  };

  return (
    <li>
      <FontAwesomeIcon 
        icon={faHeart} 
        onClick={() => handleClick('favorite')} 
        color={isFavorite ? 'red' : 'gray'}
      />
      <FontAwesomeIcon 
        icon={faClock} 
        onClick={() => handleClick('watchlater')} 
        color={isWatchLater ? 'blue' : 'gray'}
      />
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </li>
  );
};

export default MovieCard;
