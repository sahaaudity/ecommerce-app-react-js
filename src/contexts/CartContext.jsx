import { createContext } from 'react';

import { useCart } from '../hooks';

//make a context for keeping it globally
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const {cart,addToCart} = useCart()
    return (
        <CartContext.Provider value={{
            cart: cart,
            addToCart,
        }}
        >
            {children}
        
        </CartContext.Provider>
    );
};