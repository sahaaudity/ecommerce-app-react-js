
import PropTypes from 'prop-types';
import { ProductCart } from './ProductCart';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
    const renderProducts = () => {
        if (products.length === 0) {
            return <h4>No products to display</h4>;
        } else {
            return products.map((product) => (
                <ProductCart
                    key={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    productImage={product.image}
                />
            ));
        }
    };
    return (
        <div className="ProductGrid">
            {renderProducts()}
        </div>
    );
};

//alternate way
// const ProductGrid = ({ products }) => {
//     return (
//         <div className="ProductGrid">
//             {products.map(function (product) {
//                 return (
//                     <ProductCart
//                         key={product.id}
//                         productName={product.name}
//                         productPrice={product.price}
//                         productImage={product.image}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
    }))
};
export { ProductGrid };


