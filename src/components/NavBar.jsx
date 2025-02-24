import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import myLogo from "/src/assets/mylogo.svg";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <nav className={color ? "navbar navbar-bg" :
            "navbar"}>
            <div className="navbar-left">
                <img className="logoImage" src={myLogo} alt="Logo" />
                <h1>Portfolio</h1>
                {/* <h1><NavLink to="/">Portfolio</NavLink></h1> */}
            </div>

            <ul className={click ? "navbar-links active" : "navbar-links"}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </nav>
    );
};

export default Navbar;
