
const productsArray = [
    {
        id: "price_1P9SQuLaYAU1XGljpq4DeqDg",
        title: "6 Assorted Donuts",
        price: 9.99,
        image: 'heather-ford-Fq54FqucgCE-unsplash.jpg',
    },
    {
        id: "price_1P9SSrLaYAU1XGljCBcQb9zA",
        title: "2 Assorted Donuts",
        price: 3.49,
        image: 'elena-koycheva-PFzy4N0_R3M-unsplash.jpg',
    },
    {
        id: "price_1P9STbLaYAU1XGljiHvls0ba",
        title: "House Lollies",
        price: 1.25,
        image: 'alexander-grey-8XkNFQG_cgk-unsplash.jpg',
    },
    {
        id: "price_1P9STbLaYAU1XGljiHvls0bb",
        title: "Cake Pops",
        price: 1.99,
        image: 'candy1.png',
    },
    {
        id: "price_1P9STbLaYAU1XGljiHvls0bb",
        title: "Giant House Lollies",
        price: 4.99,
        image: 'jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
    },
    {
        id: "price_1P9STbLaYAU1XGljiHvls0bb",
        title: "12 Assorted Macaroons",
        price: 14.99,
        image: 'macaroons.jpg',
    },

];

function getProductData(id){
    let productData = productsArray.find( product => product.id === id);

    if(productData === undefined){
        console.log ("Product data does not exist of ID: " + id);
    }

    return productData;
}

export {productsArray, getProductData};