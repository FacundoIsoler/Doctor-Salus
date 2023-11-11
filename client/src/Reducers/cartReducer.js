// cartReducer.js
import { ADD_TO_CART } from '../Actions/cartActions.js';

const initialState = {
    cart: [], // Asegúrate de que el carrito se inicie como un array vacío.
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload], // Asegúrate de que los productos se agreguen al array correctamente.
            };
        default:
            return state;
    }
};


export default cartReducer;
