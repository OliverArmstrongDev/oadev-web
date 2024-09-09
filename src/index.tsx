import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LayoutWrapper from "./layout/LayoutWrapper";
import { AppContextProvider } from "./contexts/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <LayoutWrapper>
        <App />
      </LayoutWrapper>
    </AppContextProvider>
  </React.StrictMode>
);
