import React from "react";
import { Container, Nav, Button, Navbar } from "react-bootstrap";
import { Facebook, Instagram, CCircle } from "react-bootstrap-icons";
import {Grid, GridColumn, GridRow} from "semantic-ui-react";

function Footer(){
    return(
        <Grid>
            <GridRow centered columns={4} style={{marginTop:25}}>
                <div style={{backgroundColor:"rgb(255, 243, 219)",float:"left", width:"100%", height: 65}}>
                    <Navbar>
                            <GridColumn>
                                <Nav.Link href='/'style={{fontSize:30, marginLeft:40}}><Facebook color="rgb(208, 70, 98)"></Facebook></Nav.Link>
                            </GridColumn>
                            <GridColumn>
                                <Nav.Link href='/'style={{fontSize:30, marginLeft:5}}><Instagram color="rgb(208, 70, 98)"></Instagram></Nav.Link>
                            </GridColumn>
                            <GridColumn>
                                <footer style={{fontSize:20, marginLeft:5}}><CCircle color="rgb(208, 70, 98)"></CCircle>2024 Bee Sweet Treats, All rights reserved</footer>
                            </GridColumn>
                    </Navbar>
                </div>
            </GridRow>
        </Grid>
    )
}
export default Footer;