import CoverCarousel from "components/carousel/cover-carousel";
import Container from "components/container";
import useTmdbMovieListApi from "custom-hooks/use-tmdb-movie-list-api";
import MovieDescription from "../movie-description";

export default function ScienceFictionSection({ children, genreId }) {
  const [movies, isLoading] = useTmdbMovieListApi(genreId);

  const moviesPosters = movies.map(
    ({ id, original_title, poster_path, vote_average }) => (
      <MovieDescription
        key={id}
        genreId={genreId}
        movieId={id}
        title={original_title}
        imagePath={poster_path}
        voteAverage={vote_average}
      />
    )
  );

  return (
    <section className="movies-carousel-section">
      <Container>{children}</Container>
      {!isLoading && <CoverCarousel moviesPosters={moviesPosters} />}
    </section>
  );
}
