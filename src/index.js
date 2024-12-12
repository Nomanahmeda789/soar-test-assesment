import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/global.css";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
