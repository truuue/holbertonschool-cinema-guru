import React from 'react';
import SearchBar from '../../components/general/SearchBar';
import Input from '../../components/general/Input';
import SelectInput from '../../components/general/SelectInput';
import Tag from './Tag';
import './movies.css';

function Filter({ 
  minYear, 
  setMinYear, 
  maxYear, 
  setMaxYear, 
  sort, 
  setSort, 
  genres, 
  setGenres, 
  title, 
  setTitle 
}) {
  const sortOptions = [
    { value: 'latest', label: 'Plus récents' },
    { value: 'oldest', label: 'Plus anciens' },
    { value: 'highestrated', label: 'Mieux notés' },
    { value: 'lowestrated', label: 'Moins bien notés' }
  ];

  const genresList = [
    'action', 'drama', 'comedy', 'biography', 'romance', 
    'thriller', 'war', 'history', 'sport', 'sci-fi', 
    'documentary', 'crime', 'fantasy'
  ];

  return (
    <div className="filter-container">
      <div className="filter-section">
        <SearchBar title={title} setTitle={setTitle} />
      </div>
      
      <div className="filter-section">
        <Input
          label="Année minimum"
          type="number"
          value={minYear}
          setValue={setMinYear}
        />
        <Input
          label="Année maximum"
          type="number"
          value={maxYear}
          setValue={setMaxYear}
        />
      </div>
      
      <div className="filter-section">
        <SelectInput
          label="Trier par"
          options={sortOptions}
          value={sort}
          setValue={setSort}
        />
      </div>
      
      <div className="filter-section">
        <h3>Genres</h3>
        <ul className="tags-container">
          {genresList.map((genre, index) => (
            <Tag
              key={index}
              genre={genre}
              filter={true}
              genres={genres}
              setGenres={setGenres}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
