import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../StoreProducts";

function CartProduct(props){

    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return (
        <>
            <h1 style={{fontSize: 25, fontWeight: "lighter", color: "rgb(208, 70, 98)"}}> {productData.title}</h1>
            <p> {quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}
                    style={{fontSize: 25, fontWeight: "lighter", backgroundColor: "rgb(208, 70, 98)", borderColor:"rgb(208, 70, 98)"}}>Remove</Button>
        </>

    )
}

export default CartProduct;