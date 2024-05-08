import SpecialOrdersForm from "../Components/SpecialOrders";
import {Container} from "react-bootstrap";
import {Grid, GridColumn, GridRow} from "semantic-ui-react";
function SpecialOrdersPage(){
    return(
        <>
            <Grid>
                <GridRow columns={1} width={4}>
                    <GridColumn>
                        <div style={{marginBottom: 55, marginTop:20, fontSize:30,
                            fontWeight:"lighter", color:"rgb(208, 70, 98)"}}>
                            <h1>Please place your order below</h1></div>
                    </GridColumn>
                </GridRow>
                <GridRow columns={4}>
                    <GridColumn>
                        <SpecialOrdersForm />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    )
}
export default SpecialOrdersPage;