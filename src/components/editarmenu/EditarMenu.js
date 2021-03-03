import React from 'react';
import "./editarmenu.css";
import { Listado } from './Listado';
import { NuevoPlato } from './NuevoPlato';

export const EditarMenu = () => {
    
    return (

        <div className="menu">
    
            <NuevoPlato />
            
            <Listado />
        </div>
    )
}
