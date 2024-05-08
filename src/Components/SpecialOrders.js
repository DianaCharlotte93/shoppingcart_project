import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Success from "../Pages/Success";

function SpecialOrdersForm() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFirstLastName">
                    <Form.Label>First and last name</Form.Label>
                    <Form.Control type="FirstLastName" placeholder="FirstAndLastName" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridOrder">
                <Form.Label>Your Order:</Form.Label>
                <Form.Control placeholder="Please place your order" />
            </Form.Group>

            <h5>For larger orders, please give us a call!</h5>

            <Button style={{fontSize: 25, fontWeight: "lighter",
                backgroundColor: "rgb(208, 70, 98)", borderColor:"rgb(208, 70, 98)"}}
                    variant="primary" type="submit" href={'Success'}>
                Submit
            </Button>
        </Form>
    );
}

export default SpecialOrdersForm;