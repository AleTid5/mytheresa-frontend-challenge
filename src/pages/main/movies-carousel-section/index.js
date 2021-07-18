import CoverCarousel from "components/carousel/cover-carousel";
import Container from "components/container";
import useTMDBApi from "custom-hooks/use-tmdb-api";

export default function ScienceFictionSection({ children, genreId }) {
  const [movies, isLoading, error] = useTMDBApi(genreId);

  const moviesPosters = movies.map(
    ({ poster_path }) => process.env.TMDB_IMAGE_URL + poster_path
  );

  return (
    <>
      <Container>{children}</Container>
      {!isLoading && <CoverCarousel images={moviesPosters} />}
    </>
  );
}
