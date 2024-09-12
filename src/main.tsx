import ReactDOM from "react-dom/client";
import App from "./App/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "./context/theme.context.tsx";
import About from "./App/About.tsx";
import Projects from "./App/Projects.tsx";
import Exp from "./App/Exp.tsx";

import './assets/mine.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Exp />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
