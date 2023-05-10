import React, { useState } from 'react';
import"./header.css";
import logo from "./logo.png";

const Header = () => {
    // Toggle Menu
    const [toggle, setToggle] = useState(false);

    return (
        <header className="header">
            <nav className="nav container" style={{ columnGap: "2rem" }}>
                <a href="index.html" className="nav__logo" style={{ color: "white", fontWeight: 800, fontFamily: 'Tilt Prism' }}>
                    <img src={logo} alt="Logo" style={{ width: "10rem" }} />
                </a>

                <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#about" className="nav__link active-link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link active-link">
                                <i className="uil uil-files-landscapes-alt nav__icon"></i> Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link active-link">
                                <i className="uil uil-files-landscapes-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link active-link">
                                <i className="uil uil-paperclip nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link active-link" style={{ color: "white", fontWeight: 800 }}>
                                <i className="uil uil-message nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link active-link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close " onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;