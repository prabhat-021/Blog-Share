import img1 from "./images/blog-icon.webp";
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    return (
        <section className="navbar">
            <div className="">
                <img src={img1} alt="nav-icon" className="nav-img" />
            </div>
            <div className="nav-1">
                <div className="nav-2">
                    <li className="nav-list">
                        <NavLink className="item" to="/home">HOME</NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink className="item" to="/blog">BLOG</NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink className="item" to="/about">ABOUT</NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink className="item" to="/contact">CONTACT</NavLink>
                    </li>
                </div>
            </div>
            <div className="mobile-navbar-btn">
                <MenuIcon name="menu-outline" className="mobile-nav-icon"/>
                <CloseIcon name="close-outline" className="mobile-nav-icon"/>
            </div>
        </section>
    );
}