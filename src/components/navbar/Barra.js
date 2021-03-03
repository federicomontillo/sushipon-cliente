import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './navbar.css';
import Logo from '../../img/SushiPongLogo.png';
import AuthContext from '../../context/autenticacion/authContext';


export const Barra = () => {

    // NavBar scroll
    const [navbar, setNavbar] = useState(false);

    const cambioColorNav = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', cambioColorNav);

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, []);

 
    return (
        <>
            <ReactBootStrap.Navbar className={navbar ? 'nav-bar active' : 'nav-bar'} bg="trasnparent" variant="light" expand="lg" navbar="expand-lg" fixed="top">
                <ReactBootStrap.Navbar.Brand href="/"> <img
                    src={Logo}
                    width="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"/>
                    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootStrap.Nav className="ml-auto text-center">
                            <ReactBootStrap.Nav.Link href="/" className="mt-2">Home</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="menu" className="mt-2">Menu</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="/#nosotros" className="mt-2 mb-2">Nosotros</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="/#contacto" className="mt-2 mb-2">Contacto</ReactBootStrap.Nav.Link>
                            {usuario ? 
                                <>  
                                    <div className="editar-menu">
                                    <ReactBootStrap.Nav.Link href="/editarmenu" className="mt-2 mb-2" >Editar Menu</ReactBootStrap.Nav.Link>
                                    </div>
                                    <div className="cerrar-sesion">
                                    <ReactBootStrap.Nav.Link onClick={() => cerrarSesion() } className="mt-2 mb-2 cerrar-sesion">Cerrar Sesion</ReactBootStrap.Nav.Link>
                                    </div>
                                </>
                            : null}   
                    </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </>
    )
}
