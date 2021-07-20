import { useParams } from "react-router-dom";
import StarIcon from "assets/icons/StarIcon";
import HalfStarIcon from "assets/icons/HalfStarIcon";
import FullHeartIcon from "assets/icons/FullHeartIcon";
import { getGenreName } from "config/tmdb-api-connector.config";
import Card from "components/card";
import Container from "components/container";
import Image from "components/image";
import useTmdbMovieDetailsApi from "custom-hooks/use-tmdb-movie-details-api";

export default function MovieDetails() {
  const { movieId, genreId } = useParams();
  const [movie, isLoading] = useTmdbMovieDetailsApi(movieId);
  const genreName = getGenreName(genreId);

  return (
    <div className={`movie-details ${genreName}`}>
      <Container>
        <Card className={`banner ${genreName}`}>
          {genreName?.replaceAll("-", " ")}
        </Card>
        <Card className="movie-details-main-card">
          <Image src={movie.poster_path} />
          <div className="description">
            <div className="stars" title={`Rate: ${movie.vote_average}`}>
              {Array(parseInt(movie.vote_average ?? 0)).fill(<StarIcon />)}
              {movie.vote_average % 2 !== 0 && <HalfStarIcon />}
            </div>
            <div className="title">{movie.title}</div>
            <div className="overview">“ {movie.overview} ”</div>
            <button className="button-add-to-favorites">
              <FullHeartIcon />
              <span>Add to favorites</span>
            </button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
