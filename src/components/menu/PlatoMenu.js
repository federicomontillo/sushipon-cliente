import React from 'react'

export const PlatoMenu = ({plato}) => {
    return (
        <li className="contenedor-plato">
            <div className="plato">
                <h3>{plato.nombre}<span>$ {plato.precio}</span></h3>
                <p>{plato.descripcion}</p>
            </div>

            <hr/>
        </li>
    )
}
