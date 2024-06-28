import { useState } from 'react';
export function useCart(){
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        if (cart.find(cartItem => cartItem.id === product.id)) {
            alert('already added');
            return;
        }
        setCart(previousState => [...previousState, product]);
    };
    return {cart,addToCart};
}