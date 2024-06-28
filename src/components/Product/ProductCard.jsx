// my code
// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import logo from '../../logo.svg';
import { CartContext } from '../../contexts';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const {  addToCart } = useContext(CartContext);



  return (
    <div className="ProductCard">
      <img src={logo} alt={product.name} width="200px" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
  );
};



//documentation dekkhe dekhe korbo
//props-types-npm
// ProductCard.propTypes = {
//     productName: PropTypes.string.isRequired,
//     productPrice: PropTypes.number.isRequired,
//     productImage: PropTypes.string.isRequired,
// };

// export{ProductCard};
