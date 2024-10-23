import React, { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/MovieCard";
import axios from "axios";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("/api/titles/favorite/");
        setMovies(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des favoris:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites">
      <h1>Films que vous aimez</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
