import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteMoviesProvider } from "@contexts/favorite-movies.context";
import Navbar from "../../components/navbar";
import Pages from "../../pages";

const AllTheProviders = (
  <Router>
    <FavoriteMoviesProvider>
      <Navbar />
      <Pages />
    </FavoriteMoviesProvider>
  </Router>
);

const customRender = (ui, options) => render(AllTheProviders, options);

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
