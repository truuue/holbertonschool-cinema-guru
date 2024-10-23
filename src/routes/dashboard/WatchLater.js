import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/MovieCard';
import axios from 'axios';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const response = await axios.get('/api/titles/watchlater/');
        setMovies(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement de la liste 'À regarder plus tard':", error);
      }
    };

    fetchWatchLater();
  }, []);

  return (
    <div className="watch-later">
      <h1>Films à regarder plus tard</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
