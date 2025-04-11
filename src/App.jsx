import React from 'react';
import { Container } from 'react-bootstrap';
import { CartProvider } from './context/CartContext';
import Header from './components/HomePage/Header';
import ProductPage from './components/Product/ProductPage';


const App = () => {
  return (
    <CartProvider>
      <Header />
      {/* <Container className="my-4"> */}
        <ProductPage />
      {/* </Container> */}
    </CartProvider>
  );
};

export default App;