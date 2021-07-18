import { StrictMode } from "react";
import ReactDom from "react-dom";
import "assets/styles/index";
import Pages from "pages";
import HeaderNavbar from "components/header-navbar";

ReactDom.render(
  <StrictMode>
    <HeaderNavbar />
    <Pages />
  </StrictMode>,
  document.getElementById("app")
);
