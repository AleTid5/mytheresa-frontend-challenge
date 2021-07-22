import { StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/index";
import Pages from "./pages";
import Navbar from "./components/navbar";
import { FavoriteMoviesProvider } from "./contexts/favorite-movies.context";

ReactDom.render(
  <StrictMode>
    <Router>
      <FavoriteMoviesProvider>
        <Navbar />
        <Pages />
      </FavoriteMoviesProvider>
    </Router>
  </StrictMode>,
  document.getElementById("app")
);
