import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/MovieCard';
import Filter from '../../components/Filter';
import Button from '../../components/Button';
import axios from 'axios';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = async (pageNum) => {
    try {
      const response = await axios.get('/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageNum
        }
      });
      if (pageNum === 1) {
        setMovies(response.data);
      } else {
        setMovies(prevMovies => [...prevMovies, ...response.data]);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des films:", error);
    }
  };

  useEffect(() => {
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    loadMovies(page + 1);
  };

  return (
    <div className="homepage">
      <Filter 
        minYear={minYear}
        maxYear={maxYear}
        genres={genres}
        sort={sort}
        title={title}
        setMinYear={setMinYear}
        setMaxYear={setMaxYear}
        setGenres={setGenres}
        setSort={setSort}
        setTitle={setTitle}
      />
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Button onClick={handleLoadMore} text="Charger plus..." />
    </div>
  );
};

export default HomePage;
