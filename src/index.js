import { StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "assets/styles/index";
import Pages from "pages";
import Navbar from "components/navbar";

ReactDom.render(
  <StrictMode>
    <Router>
      <Navbar />
      <Pages />
    </Router>
  </StrictMode>,
  document.getElementById("app")
);
