import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const [movies] = useState([
    { title: 'Kill Bill: Vol. 1', genre: 'Action', releaseYear: 2023 },
    { title: 'From Dusk Till Dawn', genre: 'Action', releaseYear: 1996 },
    { title: 'Sin City', genre: 'Action', releaseYear: 2005 },
    { title: 'Nimona', genre: 'Drama', releaseYear: 2023 },
    { title: 'Elemental', genre: 'Drama', releaseYear: 1997 },
    { title: 'Titanic', genre: 'Drama', releaseYear: 2023 },
    { title: 'The Visitors', genre: 'Comedy', releaseYear: 1993 },
    { title: 'The Goat', genre: 'Comedy', releaseYear: 1981 },
    { title: 'Modern Times', genre: 'Comedy', releaseYear: 1936 },
    { title: 'Ad Astra', genre: 'Science Fiction', releaseYear: 2019 },
    { title: 'The Matrix', genre: 'Science Fiction', releaseYear: 1999 },
    { title: 'Annihilation', genre: 'Science Fiction', releaseYear: 2018 },
  ]);

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = event => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = title => {
    alert(`You clicked on ${title}`);
  };

  const filteredMovies = selectedGenre === 'All Genres'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="movie-list-container">
      <h2>Movie List</h2>
      <label>
        Filter by Genre:
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="All Genres">All Genres</option>
          {[...new Set(movies.map(movie => movie.genre))].map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.title} onClick={() => handleMovieClick(movie.title)} className="movie">
            <div className="movie-details">
              <h3 className="movie-title">
                <span className="title-label">Title:</span> {movie.title}
              </h3>
              <p><strong className="movie-genre">Genre:</strong> {movie.genre}</p>
              <p><strong className="movie-releaseYear">Released Year:</strong> {movie.releaseYear}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
