// PatientForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientForm.css';

const PatientForm = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dni, setDni] = useState('');
    const [reason, setReason] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const handleRequest = () => {
        // Realiza cualquier lógica necesaria para procesar la solicitud del paciente
        navigate('/pagodeservicio');
    };

    return (
        <div className="patient-form">
            <h1>Solicitud de telemedicina</h1>
            <input
                type="text"
                placeholder="Teléfono de contacto"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nombre y Apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="N° de documento"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
            />
            <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            >
                <option value="">Motivo de consulta</option>
                <option value="Fiebre">Fiebre</option>
                <option value="Nauseas">Nauseas</option>
                <option value="Dolor de garganta">Dolor de garganta</option>
                <option value="Tos">Tos</option>
                <option value="Migraña">Migraña</option>
                <option value="Consulta de medicamentos">Consulta de medicamentos</option>
                <option value="Diarrea">Diarrea</option>
                <option value="Resfrío">Resfrío</option>
            </select>
            <input
                type="number"
                placeholder="Edad"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className='input-age'
            />
            <button onClick={handleRequest}>Solicitar atención médica virtual</button>
        </div>
    );
};

export default PatientForm;
