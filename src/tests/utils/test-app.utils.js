import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteMoviesProvider } from "@contexts/favorite-movies.context";
import Navbar from "../../components/navbar";
import Pages from "../../pages";

const customRender = () =>
  render(
    <Router>
      <FavoriteMoviesProvider>
        <Navbar />
        <Pages />
      </FavoriteMoviesProvider>
    </Router>
  );

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
