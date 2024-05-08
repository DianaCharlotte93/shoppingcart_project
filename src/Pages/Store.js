import {Row, Col, Container} from 'react-bootstrap';
import {productsArray} from "../StoreProducts";
import ProductCard from "../Components/ProductCard";
function Store(){
    return (
        <>
            <div style={{width:"flex"}}>
                <Container>
                    <div style={{textAlign:"center"}}><h1 style={{marginTop:20, marginBottom:30, textDecoration:"underline", fontSize:30,
                        fontWeight:"lighter", color:"rgb(208, 70, 98)"}}>Bee Sweet Treats</h1></div>
                    <Row xs={1} md={3} className='g-4'>
                            {productsArray.map((product, idx) => (
                                <Col align="center" key={idx}>
                                    <ProductCard product={product}/>
                                </Col>
                            ))}
                    </Row>
                </Container>
            </div>
            </>
    );
}
export default Store;