import NavbarComponent from "./Components/Navbar";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import ItemPage from "./Pages/itemPage";
import Store from "./Pages/Store";
import LandingPage from "./Pages/LandingPage";
import CartProvider from './CartContext';
import React from "react";
import SpecialOrdersPage from "./Pages/SpecialOrdersPage";
import Footer from "./Components/footer";
import Success from "./Pages/Success";
import Checkout from "./Services/callCheckout";
import Confirmation from "./Pages/Confirmation";
function App() {
  return (

      <CartProvider>
          <Container>
            <NavbarComponent />
              <BrowserRouter>
                <Routes>
                  <Route index element={<LandingPage />} />
                  <Route path='Store' element={<Store />} />
                    <Route path='SpecialOrdersPage' element={<SpecialOrdersPage />} />
                    <Route path='Success' element={<Success />} />
                  <Route path='Checkout' element={<Checkout />} />
                  <Route path='Confirmation' element={<Confirmation />} />
                  <Route path='ItemPage' element={<ItemPage />} />
                </Routes>
              </BrowserRouter>
              <Footer />
          </Container>
      </CartProvider>
  );
}

export default App;