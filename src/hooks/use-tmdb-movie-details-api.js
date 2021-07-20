import { useEffect, useState } from "react";
import TMDBApiConnector from "config/tmdb-api-connector.config";

export default function useTmdbMovieDetailsApi(movieId) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const { data } = await TMDBApiConnector.get(`/movie/${movieId}`);

        console.log(data);

        setMovies(data);
      } catch (e) {
        setError(
          "There was an error when trying to get the movie description 😔 We are working to fix it! Please, try again in a few minutes."
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return [movies, isLoading, error];
}
