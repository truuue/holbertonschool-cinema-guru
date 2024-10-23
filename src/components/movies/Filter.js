import React from "react";
import "./movies.css";
import Tag from "./Tag";
import SearchBar from "./SearchBar"; // Assurez-vous d'avoir créé ce composant
import SelectInput from "./SelectInput"; // Assurez-vous d'avoir créé ce composant

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  const allGenres = [
    "action",
    "drama",
    "comedy",
    "biography",
    "romance",
    "thriller",
    "war",
    "history",
    "sport",
    "sci-fi",
    "documentary",
    "crime",
    "fantasy",
  ];

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />
      <input
        type="number"
        value={minYear}
        onChange={e => setMinYear(e.target.value)}
        placeholder="Année minimum"
      />
      <input
        type="number"
        value={maxYear}
        onChange={e => setMaxYear(e.target.value)}
        placeholder="Année maximum"
      />
      <SelectInput
        value={sort}
        onChange={setSort}
        options={[
          { value: "latest", label: "Plus récent" },
          { value: "oldest", label: "Plus ancien" },
          { value: "highestrated", label: "Mieux noté" },
          { value: "lowestrated", label: "Moins bien noté" },
        ]}
      />
      <ul>
        {allGenres.map(genre => (
          <Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
