import { GENRES } from "config/tmdb-api-connector.config";
import MoviesCarouselSection from "./movies-carousel-section";

export default function Main() {
  return (
    <>
      <MoviesCarouselSection genreId={GENRES.SCIENCE_FICTION}>
        <h1 className="title">Science Fiction</h1>
      </MoviesCarouselSection>
      <MoviesCarouselSection genreId={GENRES.COMEDY}>
        <h1 className="title">Comedy</h1>
      </MoviesCarouselSection>
      <MoviesCarouselSection genreId={GENRES.WESTERN}>
        <h1 className="title">Western</h1>
      </MoviesCarouselSection>
    </>
  );
}
