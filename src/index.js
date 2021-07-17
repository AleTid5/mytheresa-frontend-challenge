import { StrictMode } from "react";
import ReactDom from "react-dom";
import "assets/styles/index";
import App from "components/app";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
