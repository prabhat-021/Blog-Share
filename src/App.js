import "./styles.css";
// import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Blog from "./Blog.js";
import About from "./About.js";
import Contact from "./Contact.js" 
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}
