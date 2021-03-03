import React, { useContext, useState, useEffect } from 'react';
import platoContext from '../../context/platos/platoContext';

export const NuevoPlato = () => {

    //Obtener fucnion Context

    const platosContext = useContext(platoContext);
    const { platoseleccionado, errorplato, agregarPlato, validarPlato, actualizarPlato, limpiarPlato } = platosContext;

    //Effect que detecta si hay un plato seleccionado
    useEffect(() => {
        if(platoseleccionado !== null) {
            guardarPlato(platoseleccionado)
        } else {
            guardarPlato({
                nombre: '',
                descripcion: '',
                precio: '',
                categoria: '',
                id: ''
            })
        }
    }, [platoseleccionado])

    //State neuvo plato
    const [plato, guardarPlato] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria: '',
        id: ''
    });

    //Extraer valores nuevo plato
    const {nombre, descripcion, precio, categoria} = plato;

    const onChangePlato = e => {
        guardarPlato({
            ...plato,
            [e.target.name] : e.target.value
        })
    }


    //Cuando el usuario envia un plato

    const onSubmitPlato = e => {
        e.preventDefault();

        //Validar el plato
        if(nombre.trim() === '' || descripcion.trim() === '' || categoria.trim() === '' || precio.length === 0) {
            validarPlato();
            return;
        }

        //Si es edicion o nuevo Plato
        if( platoseleccionado === null ) {
            //Plato nuevo
            //Agregar al state
            agregarPlato(plato);

        } else {
            //Actualizar plato existente
            actualizarPlato(plato);

            //Elimina palto seleccionado del state
            limpiarPlato();
        }

        //Reiniciar Form
        guardarPlato({
            nombre: '',
            descripcion: '',
            categoria: '',
            precio: ''
        });

    }

    return (
        
            <div className="menu-edicion">
                <h3>Editar</h3>

                <form
                    onSubmit={onSubmitPlato}
                >
                    <h5>Agregar/Editar Plato</h5>
                    {errorplato ? <div className="mensaje-error"><p>Todos los campos son obligatorios.</p></div> : null}
                    <input 
                        type="text"
                        className=""
                        placeholder="Nombre del Plato"
                        name="nombre"
                        value={nombre}
                        onChange={onChangePlato}
                    />

                    <input 
                        type="text"
                        className=""
                        placeholder="Descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={onChangePlato}
                    />
                
                    <select
                        name="categoria"
                        value={categoria}
                        onChange={onChangePlato}
                    >
                        <option>Elija Categoria</option>
                        <option value="combinados">Combinados</option>
                        <option value="cocina">Cocina</option>
                        <option value="piezas">Piezas</option>
                        <option value="postres">Postres</option>
                        <option value="bebidas">Bebidas</option>
                    </select>

                    

                    <input 
                        type="number"
                        className=""
                        placeholder="Precio"
                        name="precio"
                        value={precio}
                        onChange={onChangePlato}
                    />

                    <input 
                        type="submit"
                        className="btn-menu"
                        value={platoseleccionado ? 'Editar Plato' : 'Agregar Plato'}
                    />

                </form>
            </div>
    
    )
}
