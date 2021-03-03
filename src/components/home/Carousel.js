import React, { useState, useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import clienteAxios from '../../config/axios';
import './carousel.css';

export const Carousel = () => {

    const initialState = [{
        categoria: "destacado",
        creador: "",
        descripcion: "Coloque una descripcion",
        nombre: "Coloque un plato aqui",
        precio: "000"
    }];

    //State de menu
    const [ platoDestacado, obtenerPlatos] = useState(initialState);

    
   
    //Traer Menu de DB
    const obtenerMenu = async () => {
        const resultado = await clienteAxios.get('/api/menu/6026be6a425cb4430c7f8714');
        const platosMenu = resultado.data.platos;
        const plato = platosMenu.filter(plato => plato.categoria === 'destacado');
        const platoCarru = plato[0];
     obtenerPlatos(platoCarru);
    };

    useEffect(() => {
        obtenerMenu();
    }, []);
   

    return (
        <div>
            <ReactBootStrap.Carousel>
                <ReactBootStrap.Carousel.Item className="img-fondo">
                    <ReactBootStrap.Carousel.Caption className="contenedorcarousel">
                    <h2>Lo mejor del sushi en un solo lugar</h2>
                    <h3 className="mb-5">Visita nuestro menu</h3>
                    <ReactBootStrap.Button variant="outline-dark" className="boton-menu" href="/menu">Menu online</ReactBootStrap.Button>{' '}
                    <ReactBootStrap.Button variant="outline-dark" className="boton-menu" href="tel:1154770605">Pedir telefonicamente</ReactBootStrap.Button>{' '}
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>

                <ReactBootStrap.Carousel.Item className="img-fondo2">
                    <ReactBootStrap.Carousel.Caption className="contenedorcarousel">
                    <div className="destacado">
                    <h2>Promo Destacada:</h2>    
                    <h3>{platoDestacado.nombre}</h3>
                    <h4>{platoDestacado.descripcion}</h4>
                    <p>$ {platoDestacado.precio}</p>
                    </div>
                    <ReactBootStrap.Button variant="outline-dark" className="boton-menu" href="/menu">Menu online</ReactBootStrap.Button>{' '}
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>

            </ReactBootStrap.Carousel>
        </div>
    )
}
