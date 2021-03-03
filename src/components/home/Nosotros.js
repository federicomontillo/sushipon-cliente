import React from 'react';
import './nosotros.css';
import Cocinando from '../../img/cocinando1.jpg';
import Local from '../../img/localsushi.jpg';
import Qr from '../../img/qr.jpg';
import Logo from "../../img/SushiPongLogo.png";

export const Nosotros = () => {
    return (
        <div className="nosotros" id="nosotros">
                <h4>Cultura</h4>
                <img
                    src={Logo}
                    width="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                    <div className="contenedor-cards">
                        <div className="card-nosotros">
                            <img src={Cocinando} alt="cocina"/>
                            <h4>La cocina</h4>
                            <p>Los mejores Sushiman a tu servicio, brindandote los productos mas frescos del mercado.</p>
                        </div>

                        <div className="card-nosotros">
                            <img src={Local} alt="Local"/>
                            <h4>Nuestro espacio</h4>
                            <p>Te esperamos en nuestro local y asi puedas completar tu experiencia SushiPon.</p>
                        </div>

                        <div className="card-nosotros">
                            <img src={Qr} alt="Qr"/>
                            <h4>Te cuidamos</h4>
                            <p>Con nuentro menu QR Digital no tenes la necesidad de utilizar cartas
                                 fisicas que pasan de mano en mano, y solo con tu celular ya tendras nuestro menu a tu alcance.</p>
                        </div>

                    </div>
                    <hr/>
                <div className="info-nosotros">  
                    <h5>Nosotros:</h5>     
                    <p>En <span>SushiPon</span> trabajamos hace 10 años para brindarte la mejor calidad en comida y atencion, prestando atencion en cada uno de los
                    detalles para asegurarnos de que tu paso por nuestro espacion no queda en solo una cena mas.</p>

                    <p>Desde hace 10 años brindando el mejor servicio de la ciudad, gracias a eso nuestros clientes nos vuelven a elegir dia a dia.</p>
                 </div>
        </div>
    )
}
