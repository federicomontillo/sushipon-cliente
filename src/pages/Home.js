import React from 'react';
import './home.css';
import { Carousel } from '../components/home/Carousel';
import { Nosotros } from '../components/home/Nosotros';



export const Home = () => {


    return (
        <>
            <div className="home">
                <div id="home">
                
                <Carousel />
                
                <Nosotros />
                </div>
            </div>
        </>
    )
}
