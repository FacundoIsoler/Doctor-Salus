// src/components/Checkout/Checkout.js

import React, { useState } from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';
import './Checkout.css';

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    const handlePaymentComplete = () => {
        setCheckoutComplete(true);
    };

    return (
        <div className="checkout">
            <h2>Proceso de pago</h2>
            {cart.length === 0 ? (
                <p>Su carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((product) => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                    {!checkoutComplete ? (
                        <PaymentForm onPaymentComplete={handlePaymentComplete} />
                    ) : (
                        <p>Pago completado. ¡Gracias por su compra!</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Checkout;
