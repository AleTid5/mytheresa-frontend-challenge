import { useLayoutEffect, useState } from "react";
import TMDBApiConnector from "@config/tmdb-api-connector.config";

export default function useTmdbMovieListApi(genreId) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const {
          data: { results },
        } = await TMDBApiConnector.get(`/genre/${genreId}/movies`);

        setMovies(results);
      } catch (e) {
        setError(
          "There was an error when trying to get the movie list 😔 We are working to fix it! Please, try again in a few minutes."
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, [genreId]);

  return [movies, isLoading, error];
}
