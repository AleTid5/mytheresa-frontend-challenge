import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import ProductDetails from "./product-details";
import Main from "./main";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/product-details" exact component={ProductDetails} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
