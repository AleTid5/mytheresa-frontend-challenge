import { createContext, useContext, useState } from "react";

const FavoriteMoviesContext = createContext({
  favoriteMovies: [],
  addToFavorites: () => {},
  isMovieInTheList: () => {},
  removeFromFavorites: () => {},
});

const { Provider } = FavoriteMoviesContext;

export const FavoriteMoviesProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const isMovieInTheList = (movieId) =>
    favoriteMovies.some(
      (favoriteMovie) => favoriteMovie.id === parseInt(movieId)
    );

  const addToFavorites = (movie) => {
    if (isMovieInTheList(movie.id)) return;

    setFavoriteMovies([...favoriteMovies, movie]);
  };

  const removeFromFavorites = (movieId) =>
    setFavoriteMovies(
      favoriteMovies.filter(
        (favoriteMovie) => favoriteMovie.id !== parseInt(movieId)
      )
    );

  return (
    <Provider
      value={{
        favoriteMovies,
        addToFavorites,
        isMovieInTheList,
        removeFromFavorites,
      }}
    >
      {children}
    </Provider>
  );
};

export const useFavoriteMoviesContext = () => {
  const context = useContext(FavoriteMoviesContext);

  if (!context) {
    throw new Error(
      "useFavoriteMoviesContext must be used within a FavoriteMoviesProvider"
    );
  }

  return context;
};
