import {OBTENER_PLATOS, 
        AGREGAR_PLATO, 
        VALIDAR_PLATO, 
        ELIMINAR_PLATO, 
        PLATO_ERROR,
        PLATO_ACTUAL, 
        ACTUALIZAR_PLATO, 
        LIMPIAR_PLATO } from '../../components/types/index';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch (action.type) {

        case OBTENER_PLATOS:
            return {
                ...state,
                platos: action.payload
            }
        
        case AGREGAR_PLATO:
            return {
                ...state,
                platos: [ action.payload, ...state.platos ],
                errorplato: false
            }
        
        case VALIDAR_PLATO:
            return {
                ...state,
                errorplato: true    
            }    
         
        case ELIMINAR_PLATO:
            return {
                ...state,
                platos: state.platos.filter(plato => plato._id !== action.payload)
            }    

        case PLATO_ACTUAL: 
            return {
                ...state,
                platoseleccionado: action.payload
            }   
            
        case ACTUALIZAR_PLATO:
            return {
                ...state,
                platos: state.platos.map(plato => plato._id === action.payload._id ? action.payload : plato)
            }    
            
        case LIMPIAR_PLATO:
            return {
                ...state,
                platoseleccionado: null
            }   

        case PLATO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }    


        default:
            return state;
    }
}