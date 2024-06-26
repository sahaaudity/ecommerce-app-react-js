// my code
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './ProductCart.css'; 

 const ProductCart = ({ productName, productPrice, productImage }) => {
    return (
        <div className="ProductCart">
            <img src={logo} alt={productName} width='200px' />
            <h2>{productName}</h2>
            <p>${productPrice}</p>
        </div>
    );
};

//documentation dekkhe dekhe korbo
//props-types-npm
ProductCart.propTypes = {
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
};

export{ProductCart};
