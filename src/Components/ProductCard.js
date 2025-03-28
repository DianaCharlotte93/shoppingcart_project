import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext} from '../CartContext';
import React, { useContext } from "react";

function ProductCard(props) { //props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
        <Card>
            <Card.Body>
                <Card.Img height={350} width={200} src={require('../Assets/Products/'+product.image)} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart {productQuantity}
                            </Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2"
                                        style={{backgroundColor:"rgb(208, 70, 98)", borderColor:"rgb(208, 70, 98)"}}>+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2"
                                        style={{backgroundColor:"rgb(208, 70, 98)", borderColor:"rgb(208, 70, 98)"}}>-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2"
                                style={{backgroundColor:"rgb(208, 70, 98)", borderColor:"rgb(208, 70, 98)"}}>Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}
                            style={{backgroundColor:"rgb(208, 70, 98)", borderColor:"rgb(208, 70, 98)"}}>Add to Cart</Button>
                }

            </Card.Body>
        </Card>

    )

}

export default ProductCard;