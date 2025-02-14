import React, { useState } from "react";
import logo from '../images/Logo.svg'

const Nav = () => {
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Acerca de</a>
                </li>
                <li>
                    <a href="/">Menú</a>
                </li>
                <li>
                    <a href="/">Reservas</a>
                </li>
                <li>
                    <a href="/">Pedidos en línea</a>
                </li>
                <li>
                    <a href="/">Iniciar sesión</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;