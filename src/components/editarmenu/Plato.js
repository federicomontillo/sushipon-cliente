import React, { useContext } from 'react';
import platoContext from '../../context/platos/platoContext';
import { animateScroll as scroll } from "react-scroll";



export const Plato = ({plato}) => {

    //Obtener fucnion Context

    const platosContext = useContext(platoContext);
    const { eliminarPlato, guardarPlatoActual } = platosContext;

    //Funcion que se ejecuta cuando el usuario precion el boton de eliminar tarea
    const platoEliminar = () => {
        eliminarPlato(plato._id);
    }

    //Agrega una plato actual para su edicion
    const seleccionarPlato = plato => {
        guardarPlatoActual(plato);
        scroll.scrollToTop();
    }


    return (
        <li className="contenedor-plato">
            <div className="plato">
                <h3> {plato.nombre} <span>$ {plato.precio}</span></h3>
                <p>{plato.descripcion}</p>
            </div>

            <div className="acciones">
                <button
                    className="btn-acciones btn-editar"
                    onClick={() => seleccionarPlato(plato)}
                >
                    Editar
                </button>

                {plato.categoria === 'destacado' ? null : 
                    <button
                    className="btn-acciones btn-eliminar"
                    onClick={() => platoEliminar(plato._id)}
                    >
                        Eliminar
                    </button>
                }

                
            </div>
            <hr/>
        </li>
    )
}
