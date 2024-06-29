// my code
// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import logo from '../../logo.svg';
import { CartContext } from '../../contexts';


export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        className="w-full mb-4"
        src={logo}
        alt="Product image"
        width="200px"
      />
      <p className="text-lg font-semibold">{product.name}</p>
      <p className="text-gray-700">{`$${product.price}`}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
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
