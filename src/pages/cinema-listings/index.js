import { GENRES } from "@config/tmdb-api-connector.config";
import SECTIONS from "@constants/section.constant";
import MoviesCarouselSection from "./components/movies-carousel-section";

export default function CinemaListings() {
  return SECTIONS.map(({ title, genre }) => (
    <MoviesCarouselSection genreId={GENRES[genre]} key={genre}>
      <h1 className="movie-section">{title}</h1>
    </MoviesCarouselSection>
  ));
}
