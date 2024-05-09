async function callCheckout(cart){
    console.log("Calling Checkout");
    const response = await fetch('http://localhost:5000/api/checkout', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    })
    console.log("response: %o", response);
    return response.json();
}
export default callCheckout;