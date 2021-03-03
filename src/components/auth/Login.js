import React, { useState, useContext, useEffect } from 'react';
import './login.css';
import './alerta.css';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


export const Login = (props) => {


    //Extraer valores Context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion }= authContext;

    useEffect(() => {
        if(autenticado) {
            props.history.push('/editarmenu');
        }
        
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    }, [ mensaje, autenticado ] );

    //State para inciar sesion
    const [usuario, guardarUsuario] = useState({
        username: '',
        password: ''
    });
    //Extraer usuario
    const { username, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if( username.trim() === '' || password.trim() === '' ) {
            mostrarAlerta('Todos los campos son obligarotios', 'alerta-error');
            return;
        }

        //Password 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        //Pasarlo al action
        iniciarSesion({ username, password });
    }

    return (
        <div>
            <div className="form-login">
                <div className="contenedor-form">
                    
                    <form
                        onSubmit={onSubmit}
                    >
                        <h3>Iniciar Sesion:</h3>
                            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
                            <div className="campo-form">
                                <input 
                                    type="username"
                                    id="username"
                                    name="username"
                                    placeholder="Nombre de usuario"
                                    value={username}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="campo-form">
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="campo-form">
                                <input 
                                    className="contenedor-btn btn-login"
                                    type="submit"
                                    value="Iniciar Sesion"                                  
                                />
                            </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
