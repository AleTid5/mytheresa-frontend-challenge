import { useHistory } from "react-router-dom";
import StarIcon from "assets/icons/StarIcon";

export default function MovieDescription({
  movieId,
  title,
  imagePath,
  voteAverage,
}) {
  const history = useHistory();

  function onSelectMovie() {
    history.push(`/product-details/${movieId}`);
  }

  return (
    <article onClick={onSelectMovie} className="movie-description">
      <div className="movie-description-container">
        <div className="title-container">
          <div />
          <div>{title}</div>
          <div>
            <StarIcon />
            <div>{voteAverage}</div>
          </div>
        </div>
      </div>
      <img src={process.env.TMDB_IMAGE_URL + imagePath} alt={title} />
    </article>
  );
}
