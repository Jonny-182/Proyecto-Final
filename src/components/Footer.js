import React from "react";
import logo from '../images/Logo.svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>Somos un restaurante mediterráneo familiar, centrado en recetas tradicionales servidas con un toque moderno.</p>
                </div>

                <div>
                    <h3>Enlaces recomendados</h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Acerca de</a></li>
                        <li><a href="/">Menú</a></li>
                        <li><a href="/">Reservas</a></li>
                        <li><a href="/">Pedido en línea</a></li>
                        <li><a href="/">Iniciar sesión</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contacto</h3>
                    <ul>
                        <li>Dirección: <br/> 123 Towncity, USA</li>
                        <li>Telefono: <br/> +57 123456789</li>
                        <li>Correo electrónico: <br/> littlen@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Redes Sociales</h3>
                    <ul>
                    <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};
export default Footer;