import {useProducts} from '../../api/hooks'
import {ProductCard} from './ProductCard';

const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = () => {
    const { products } = useProducts();

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.length === 0 ? (
                <ProductsEmptyState />
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
};

//alternate way
// const ProductGrid = () => {
//     const products = getProducts();
//     const renderProducts = () => {
//         if (products.length === 0) {
//             return <h4>No products to display</h4>;
//         } else {
//             return products.map((product) => (
//                 <ProductCard
//                     key={product.id}
//                     productName={product.name}
//                     productPrice={product.price}
//                     productImage={product.image}
//                 />
//             ));
//         }
//     };
//     return (
//         <div className="ProductGrid">
//             {renderProducts()}
//         </div>
//     );
// };

// ProductGrid.propTypes = {
//     products: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         image: PropTypes.string,
//         categories: PropTypes.arrayOf(PropTypes.string),
//     }))
// };
// export { ProductGrid };


