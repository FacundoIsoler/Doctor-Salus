import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className="home">
            <h1>Doctor Salus</h1>
            <h1>Telemedicina al alcance de todos</h1>
            <span>
                Las telemedicina no es para situaciones de riesgo de vida o emergencias
                Puede hacer uso si tiene los siguientes síntomas: Fiebre de reciente evolución, Diarrea,
                Resfrío, Síntomas gripales, Tos, Consultas sobre medicación. Este servicio no es para pacientes
                embarazadas ni pacientes mayores de 65 años.
            </span>
            <div className="product-container">
                <Product />
                <button>Seguimeinto de mi solicitud</button>
            </div>
        </div>
    );
};

export default Home;
