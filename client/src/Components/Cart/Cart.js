// src/components/Cart/Cart.js
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import './Cart.css';

const Cart = ({ onRemoveFromCart }) => {

    //MERCADO PAGO
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-fd0975f0-daa5-4078-98d9-13db62ca8518');

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                description: "Consulta Médica Online",
                price: 2500,
                quantity: 1,
                currency: "ARS"// por defecto toma la moneda que tengas configurada en mercado pago
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    //FINALIZA MERCADOPAGO


    const cart = useSelector((state) => state.cart);


    return (
        <div className="cart">
            <h2>Carrito de compras</h2>
            <ul>
                {cart.cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}{' '}
                        <button onClick={() => onRemoveFromCart(product)}>Eliminar</button>
                    </li>
                ))}
            </ul>{
                cart.cart.length > 0 &&
                <button onClick={handleBuy}>Pagar</button>
            }
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
    );
};

export default Cart;
