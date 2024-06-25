import logo from '../../logo.svg'
import './ProductCart.css'

export const ProductCart = ({product}) => {

    return(
        <div className='ProductCart'>
            <img src={logo} alt="product image" width='200px' />
            <p>{product.name}</p>
            <p>{`$${product.price}`}</p>
            <button>Add to Cart</button>
        </div>
    );

}