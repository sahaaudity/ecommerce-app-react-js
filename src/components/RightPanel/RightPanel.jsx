import { useContext } from "react";
import { CartContext } from "../../contexts";

export function RightPanel(){
 const {cart} =useContext(CartContext);

return(
<div>
    <div>
        <h1>Cart</h1>
        <ul>
            {cart.map((cartItem)=>(
                <li key = {cartItem.id}>
                    {`${cartItem.name}-$${cartItem.price}X 1`}
                </li>
            ))}
        </ul>
    </div>
    <button>Checkout</button>
</div>
);
}