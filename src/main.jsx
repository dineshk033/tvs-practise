import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// src/index.js or src/index.jsx

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper
createRoot(document.getElementById("root")).render(<App />);
