import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ComponentsProvider from "./context/ComponentsContext.jsx";
createRoot(document.getElementById("root")).render(
  <ComponentsProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ComponentsProvider>
);
