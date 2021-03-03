import React, { useReducer } from 'react';

import platoContext from './platoContext';
import platoReducer from './platoReducer';

import { OBTENER_PLATOS, 
        AGREGAR_PLATO, 
        VALIDAR_PLATO, 
        ELIMINAR_PLATO, 
        PLATO_ERROR,
        PLATO_ACTUAL, 
        ACTUALIZAR_PLATO, 
        LIMPIAR_PLATO } from '../../components/types';
import clienteAxios from '../../config/axios';



const PlatoState = props => {

    const initialState = {
        platos: [],
        errorplato: false,
        platoseleccionado: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(platoReducer, initialState);

    //Obetener Platos
    const obtenerPlatos = async () => {
        const resultado = await clienteAxios.get('/api/platos');
        try {
            dispatch({
                type: OBTENER_PLATOS,
                payload: resultado.data.platos
            }) 
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PLATO_ERROR,
                payload: alerta
            })
        }
        
    }
  
    //Agregar Plato
    const agregarPlato = async plato => {

        try {
            const resultado = await clienteAxios.post('/api/platos', plato);
            //Inserta el plato en el state
            dispatch({
                type: AGREGAR_PLATO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PLATO_ERROR,
                payload: alerta
            })
        }
    }

    //Valida y mustra un error
    const validarPlato = () => {
        dispatch({
            type: VALIDAR_PLATO
        })
    }

    //Eliminar plato por ID
    const eliminarPlato = async PlatoId => {

        try {
            await clienteAxios.delete(`/api/platos/${PlatoId}`);
            dispatch({
                type: ELIMINAR_PLATO,
                payload: PlatoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PLATO_ERROR,
                payload: alerta
            })
        }
        
    }

    //Extrae una plato para edicion
    const guardarPlatoActual = plato => {
        dispatch({
            type: PLATO_ACTUAL,
            payload: plato
        })
    }

    //Edita o modifica un plato
    const actualizarPlato = async plato => {

            try {
                const resultado = await clienteAxios.put(`/api/platos/${plato._id}`, plato);
                dispatch({
                    type: ACTUALIZAR_PLATO,
                    payload: resultado.data.plato
                })
            } catch (error) {
                console.log(error);
            }
            
    }

    //Elimina la seleccion de palto
    const limpiarPlato = () => {
        dispatch({
            type: LIMPIAR_PLATO
        })
    }

    return (

        <platoContext.Provider
            value={{
                platos: state.platos,
                errorplato: state.errorplato,
                platoseleccionado: state.platoseleccionado,
                platoscategoria: state.platoscategoria,
                mensaje: state.mensaje,
                obtenerPlatos,
                agregarPlato,
                validarPlato,
                eliminarPlato,
                guardarPlatoActual,
                actualizarPlato,
                limpiarPlato
            }}
        >
            {props.children}
        </platoContext.Provider>

    )
}

export default PlatoState;