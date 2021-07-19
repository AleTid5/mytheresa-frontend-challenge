import { useParams } from "react-router-dom";
import { getGenreName } from "config/tmdb-api-connector.config";
import Container from "components/container";
import Card from "components/card";
import useTmdbMovieDetailsApi from "custom-hooks/use-tmdb-movie-details-api";

export default function MovieDetails() {
  const { movieId, genreId } = useParams();
  const [movie, isLoading] = useTmdbMovieDetailsApi(movieId);
  const genreName = getGenreName(genreId);

  return (
    <div className="movie-details">
      <Container>
        <Card className={`banner ${genreName}`}>
          {genreName?.replaceAll("-", " ")}
        </Card>
      </Container>
    </div>
  );
}
