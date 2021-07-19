import { Route, Switch } from "react-router";
import MovieDetails from "./movie-details";
import CinemaListings from "./cinema-listings";

export default function Pages() {
  return (
    <Switch>
      <Route path="/movie-details/:genreId/:movieId" component={MovieDetails} />
      <Route path="/" component={CinemaListings} />
    </Switch>
  );
}
