import React from "react";
import { Link } from "react-router";
import bannerImg from '../images/restauranfood.jpg';

const Header =() => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Somos un restaurante mediterráneo familiar, centrado en recetas tradicionales servidas con un toque moderno.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve su mesa</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt=""/>
                </div>
            </section>
        </header>
    );
};

export default Header;