import React, { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import axios from "axios";

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const response = await axios.get("/api/titles/watchlater/");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching watch later list:", error);
      }
    };

    fetchWatchLater();
  }, []);

  return (
    <div className="watch-later-page">
      <h1>Films à voir plus tard</h1>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
