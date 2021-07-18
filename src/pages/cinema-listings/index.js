import { GENRES } from "config/tmdb-api-connector.config";
import MoviesCarouselSection from "./components/movies-carousel-section";

const SECTIONS = [
  {
    title: "Science Fiction",
    genre: "SCIENCE_FICTION",
  },
  {
    title: "Comedy",
    genre: "COMEDY",
  },
  {
    title: "Western",
    genre: "WESTERN",
  },
];

export default function CinemaListings() {
  return SECTIONS.map(({ title, genre }) => (
    <MoviesCarouselSection genreId={GENRES[genre]} key={genre}>
      <h1 className="movie-section">{title}</h1>
    </MoviesCarouselSection>
  ));
}
