import { useEffect, useState } from "react";
import TMDBApiConnector from "config/tmdb-api-connector.config";

export default function useTMDBApi(genreId) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const {
          data: { results },
        } = await TMDBApiConnector.get(`/genre/${genreId}/movies`);

        setMovies(results);
      } catch (e) {
        setError(
          "There was an internal error 😔 We are working to fix it! Please, try again."
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, [genreId]);

  return [movies, isLoading, error];
}
