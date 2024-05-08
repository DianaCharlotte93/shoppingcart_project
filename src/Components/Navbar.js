import {Button, Nav, Navbar, Modal, Container} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from "../Pages/ShoppingCart";
import {BagHeart} from 'react-bootstrap-icons';
function NavbarComponent(){
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const checkout = async() =>{
        await fetch('http://localhost:3000/checkout', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();

        }).then((response) =>{
            if(response.url) {
                window.location.assign(response.url);
            }
        })
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
        <div style={{backgroundColor:"rgb(255, 243, 219)", width:"flex", height: 100, borderRadius:25}}>
            <Container>
                <Navbar expand="sm">
                    <Navbar.Brand href='/'
                                  style={{fontSize: 50, fontWeight: "Bold", color: "rgb(243, 204, 76)"}}>Bee</Navbar.Brand>
                    <Navbar.Brand href='/'
                                  style={{fontSize: 50, fontWeight: "lighter", color: "rgb(255, 135, 158)"}}> Sweet</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"
                                      style={{fontSize: 25, fontWeight: "lighter", color: "rgb(208, 70, 98)"}}>Home</Nav.Link>
                            <Nav.Link href="/Store"
                                      style={{fontSize: 25, fontWeight: "lighter", color: "rgb(208, 70, 98)"}}>Shop</Nav.Link>
                            <Nav.Link href="/SpecialOrdersPage"
                                      style={{fontSize: 25, fontWeight: "lighter", color: "rgb(208, 70, 98)"}}>Special
                                Orders</Nav.Link>
                        </Nav>
                        <Button onClick={handleShow}
                                style={{backgroundColor: "rgb(243, 204, 76)", borderColor: "rgb(243, 204, 76)"}}><BagHeart color="rgb(188, 26, 85)"></BagHeart> {productsCount}
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
        </div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
                    <Modal.Title> Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p> Items in your cart: </p>
                            {

                                cart.items.map((currentProduct, idx) => (
                                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}>

                                    </CartProduct>
                                ))}

                            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                        :
                        <h1> There is no items in my cart</h1>

                    }

                </Modal.Body>

            </Modal>
        </>

    )
}

export default NavbarComponent;