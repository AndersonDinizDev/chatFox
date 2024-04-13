import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppRoutes />
    <GlobalStyles />
  </>
);
