import PropTypes from 'prop-types';

import { ProductCart } from "./ProductCart";
import './ProductGrid.css'

export const ProductGrid=({products})=>{

    // const product = products[0];


    return(
        <div className="ProductGrid">
            {products.map(product=>(
                <ProductCart 
                key={product.id} 
                product={product}/>
            ))}
            {/* <ProductCart product={products[0]}></ProductCart>
            <ProductCart product={products[1]}></ProductCart>
            <ProductCart product={products[2]}></ProductCart> */}
        </div>
    );
};