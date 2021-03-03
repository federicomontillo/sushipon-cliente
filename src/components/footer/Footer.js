import React from 'react';
import './footer.css'

export const Footer = () => {

    const fecha = new Date();

    return (
        <>
            <div className="footer" id="contacto" name="contacto">
                <div className="social">
                    <ul>
                        <li><a target="blanck" href="/"><i className="fab fa-instagram-square"></i></a></li>     
                        <li><a target="blanck" href="/"><i className="fab fa-facebook-square"></i></a></li>    
                        <li><a target="blanck" href="/"><i className="fab fa-twitter-square"></i></a></li>    
                        <li><a target="blanck" href="/"><i className="fab fa-pinterest-square"></i></a></li>    
                    </ul>
                </div>

                <div className="footer-menu">
                    <div className="footer-nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/#nosotros">Nosotros</a></li>
                        </ul>
                    </div>

                    <div className="footer-cantacto">
                        <h5>Contacto</h5>
                        <ul>
                            <li><a href="tel:1154770605"><i className="fas fa-phone-alt"></i></a></li>  
                            <li><a href="whatsapp://send?text=Hola, quería realizar la siguiente consulta... &phone=1154770605"><i className="fab fa-whatsapp-square"></i></a></li>  
                        </ul>
                    </div>
                </div>

                <div className="copi-developer">    
                    <div className="copi-developer-1">
                    <h6>&copy; Copyright {fecha.getFullYear()}</h6>
                    <p>Desarrollado por <a href="!#">FeeMontillo</a></p>
                    </div>
                    <a className="link-login" href="/login">Login</a>
                </div>

            </div>
        </>
    )
}
