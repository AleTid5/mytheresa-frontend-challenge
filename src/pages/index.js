import { Route, Switch } from "react-router";
import ProductDetails from "./product-details";
import CinemaListings from "./cinema-listings";

export default function Pages() {
  return (
    <Switch>
      <Route path="/product-details/:movieId" component={ProductDetails} />
      <Route path="/" component={CinemaListings} />
    </Switch>
  );
}
