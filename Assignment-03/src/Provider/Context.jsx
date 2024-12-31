import React, { createContext, useState } from 'react'

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  
  const addFavorite = (movie) => {
    const index = favoriteMovies.findIndex((fav) => fav.id === movie.id);
    if (index === -1) {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };
  

  const removeFavorite = (id) => {
    setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favoriteMovies,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
