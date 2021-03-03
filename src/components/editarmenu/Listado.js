import React, { useContext, useState, useEffect } from 'react';
import { Plato } from './Plato';
import "./listado.css";
import PlatoContext from '../../context/platos/platoContext';
import AlertaContext from '../../context/alertas/alertaContext';



export const Listado = () => {


    const platosContext = useContext(PlatoContext);
    const { platos, obtenerPlatos, mensaje } = platosContext;
    const { categoria } = platos;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(() => {

        //Si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerPlatos();
        //eslint-disable-next-line
    }, [ mensaje])

    //State formulario select categorias
    const [busqueda, guardarBusqueda] = useState({
        categoria: 'combinados'
    });

   
    //Funcion para leer el formulario
    const obtenerCategoria = e => {
        e.preventDefault();
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Filtrar por categoria
    const platoFiltrado = platos.filter(plato => plato.categoria === busqueda.categoria);

  
    return (
        <div className="menu-listado">
            <div className="contenedor-select">
            {alerta ? <div className="mensaje-error"><p>{alerta.msg}</p></div> : null}
            <h4>Menu:</h4>
            
            <select
                name="categoria"
                value={categoria}
                onChange={obtenerCategoria}
            >
                <option value="combinados">Combinados</option>
                <option value="cocina">Cocina</option>
                <option value="piezas">Piezas</option>
                <option value="postres">Postres</option>
                <option value="bebidas">Bebidas</option>
                <option value="destacado">Destacado</option>
            </select>
            </div>
            <hr/>
            <ul className="contenedor-platos">
                {platoFiltrado.length === 0
                    ? (<li><p>No hay platos...</p></li>)
                    : platoFiltrado.map(plato => (
                        <Plato
                            key={plato._id}
                            plato={plato}
                        />
                    ))
                }
                
            </ul>

        </div>

    )
}
