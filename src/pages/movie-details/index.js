import { useParams } from "react-router-dom";
import Card from "components/card";
import Container from "components/container";
import { getGenreName } from "config/tmdb-api-connector.config";
import MovieCard from "./components/movie-card";

export default function MovieDetails() {
  const { genreId } = useParams();
  const genreName = getGenreName(genreId);

  return (
    <div className={`movie-details ${genreName}`}>
      <Container>
        <Card className={`banner ${genreName}`}>
          {genreName?.replaceAll("-", " ")}
        </Card>
        <MovieCard />
      </Container>
    </div>
  );
}
