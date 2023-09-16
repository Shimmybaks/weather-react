import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Engine from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Engine />
  </StrictMode>
);