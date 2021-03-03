import React, { useState, useEffect } from 'react';
import './menu.css';
import clienteAxios from '../config/axios';
import { PlatoMenu } from '../components/menu/PlatoMenu';
import { Spiner } from '../components/spiner/Spiner';

export const Menu = () => {

    //Seleccionar Categoria en State
    const [ categoria, guardarCategoria ] = useState({
        categoria: 'combinados',
    });
    //State Spinner
    const [cargando, guardarCargando] = useState(false);

    const onChangeCategoria = e => {
        guardarCategoria({
            ...categoria,
            [e.target.name] : e.target.value
        })
    }

    //State de menu
    const [ platos, obtenerPlatos] = useState([]);
    
    //Traer Menu de DB
    useEffect(() => {
    const obtenerMenu = async () => {

        //Mostrar Spinner
        guardarCargando(true);

        const resultado = await clienteAxios.get('/api/menu/6026be6a425cb4430c7f8714');

        //Cambiar el estado del spinner
        guardarCargando(false);
      
        const platosMenu = resultado.data.platos;
        obtenerPlatos(platosMenu);
           
    };     

        obtenerMenu();
        
    }, []);

    //Filtrar platos por categoria
    const platoFiltrado = platos.filter(plato => plato.categoria === categoria.categoria);

    //Mostrar Spinner o platos
    const componente = (cargando) ? <Spiner /> : <ul className="contenedor-platos">
    {platoFiltrado.map(plato => (
        <PlatoMenu
            key={plato._id}
            plato={plato}
        />
        ))
    }
    </ul>;

    return (
        <div className="menu-cliente">
            <h4>Nuestro Menu</h4>
            <hr/>
                <div className="botones-categorias">
                    <button
                        className="boton-categoria" 
                        type="button"
                        name="categoria"
                        value="combinados"
                        onClick={onChangeCategoria}
                    > Combinados </button>

                    <button 
                        className="boton-categoria" 
                        type="button"
                        name="categoria"
                        value="cocina"
                        onClick={onChangeCategoria}
                    > Cocina </button>

                    <button 
                        className="boton-categoria" 
                        type="button"
                        name="categoria"
                        value="piezas"
                        onClick={onChangeCategoria}
                    > Piezas </button>

                    <button 
                        className="boton-categoria" 
                        type="button"
                        name="categoria"
                        value="postres"
                        onClick={onChangeCategoria}
                    > Postres </button>
                    

                    <button 
                        className="boton-categoria" 
                        type="button"
                        name="categoria"
                        value="bebidas"
                        onClick={onChangeCategoria}
                    > Bebidas </button>
                </div>

                <div className="listado-platos">
                    <h5>{categoria.categoria}</h5>

                    {componente}
                    

                </div>

        </div>
    )
}
