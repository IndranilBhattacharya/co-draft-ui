import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import store from "./redux/store";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider {...{ store }}>
      <App />
    </Provider>
  </StrictMode>
);
