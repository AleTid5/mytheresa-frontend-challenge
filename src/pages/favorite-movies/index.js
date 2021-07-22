import Container from "~components/container";
import { useFavoriteMoviesContext } from "~contexts/favorite-movies.context";
import FavoriteMovieCard from "./components/favorite-movie-card";

export default function FavoriteMovies() {
  const { favoriteMovies } = useFavoriteMoviesContext();

  return (
    <div className="favorite-movies">
      <Container>
        <div className="favorite-movies-grid">
          {favoriteMovies.map((favoriteMovie, key) => (
            <FavoriteMovieCard key={key} movie={favoriteMovie} />
          ))}
        </div>
      </Container>
    </div>
  );
}
