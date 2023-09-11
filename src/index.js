import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css';

const containerDiv = document.getElementById("app");
const root = createRoot(containerDiv);
root.render(<App />)
