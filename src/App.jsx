import React from 'react';
import { Container } from 'react-bootstrap';
import { CartProvider } from './context/CartContext';
import Header from './components/HomePage/Header';
import ProductPage from './components/Product/ProductPage';


const App = () => {
  return (
    <CartProvider>
      <Header />
        <ProductPage />
    </CartProvider>
  );
};

export default App;
