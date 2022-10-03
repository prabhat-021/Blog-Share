import img1 from "./images/blog-icon.webp";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <section className="navbar">
            <div className="">
                <img src={img1} alt="nav-icon" className="nav-img" />
            </div>
            <div className="navbar">
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">BLOG</NavLink>
                </li>
                <li>
                    <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </div>
        </section>
    );
}