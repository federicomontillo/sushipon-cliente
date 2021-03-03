import React from 'react';
import './Spinner.css';

export const Spiner = () => {
    return (
        <>
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
        <div className="cargando-texto">
        <p>Cargando Menu</p>  
        </div>
        </>
    )
}
