import React from "react";
import lollipop from '../Assets/Products/lollipop.jpg';

function LandingPage() {
    return (
        <div style={{marginBottom:50, marginTop:50}}>
        <h1 style={{fontStyle:"italic", textDecoration:"underline", color: "rgb(188, 26, 85)", fontWeight: 200, textAlign: "center", marginBottom:50}}>
            Welcome to Bee Sweet Treats Shop!</h1>
        <center><img src={lollipop} width={400} height={500}/></center>
            <center><h3 style={{backgroundColor:"rgb(255, 254, 249)", borderRadius:45, fontWeight: 200, color: "rgb(243, 204, 76)"}}>Bee Sweet brings you all the sweet treats you can think of.
            Made from organic, locally sourced ingredients, so you can indulge without the guilt!
            Come indulge your taste buds with us!</h3></center>
        </div>
        );

}

export default LandingPage;