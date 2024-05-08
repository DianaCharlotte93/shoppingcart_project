import {GridColumn} from "semantic-ui-react";

function Success(){
    return (
        <>
        <h1 style={{textAlign:"center", marginTop:20, marginBottom:30, fontSize:30,
            fontWeight:"lighter", color:"rgb(208, 70, 98)"}}>Thanks for your order!</h1>
        <h3 style={{textAlign:"center", marginBottom:30, fontSize:20,
            fontWeight:"lighter", color:"rgb(208, 70, 98)"}}>
                You will recieve an email shortly, confirming your order and instructions for payment</h3>
                <center><img src={require("../Assets/Products/shopcandy.png")} width={470} height={320}/></center>
        </>
    );
}
export default Success;