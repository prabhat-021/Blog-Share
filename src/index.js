// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.js";
import Blog from "./Blog.js";
import About from "./About.js";
import Contact from "./Contact.js";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
