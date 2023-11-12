import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import Footer from '../Footer/Footer.js';
import Doctor from '../../Assets/Medico.jpeg';
import Operador from '../../Assets/Operador.jpeg';
import CallCenter from '../../Assets/CallCenter.jpeg';

const Home = () => {
    return (
        <div className="home">
            <h1>Doctor Salus</h1>
            <h1>Telemedicina al alcance de todos</h1>

            {/* Secciones con imágenes */}
            <div className="home-section-container">
                <section className="home-section">
                    <img src={Doctor} alt="Imagen 1" />
                    <h2>Médicos especializados</h2>
                </section>

                <section className="home-section">
                    <img src={Operador} alt="Imagen 2" />
                    <h2>Operadores capacitados</h2>
                </section>

                <section className="home-section">
                    <img src={CallCenter} alt="Imagen 3" />
                    <h2>Centro de ayuda a su</h2>
                </section>
            </div>

            <span>
                <div className='alert'>
                    Las telemedicina no es para situaciones de riesgo de vida o emergencias.
                </div>
                <div className='sintoms'>
                    <br />Puede hacer uso si tiene los siguientes síntomas:
                </div>
                <div className='sintoms-list'>
                    <ul>
                        <li>Fiebre de reciente evolución</li>
                        <li>Diarrea</li>
                        <li>Resfrío</li>
                        <li>Tos</li>
                        <li>Consultas sobre medicación</li>
                    </ul>
                </div>
                Este servicio no es para pacientes
                embarazadas ni pacientes mayores de 65 años.
            </span>

            <div className="product-container">
                <Product />
                <button>Seguimiento de mi solicitud</button>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
