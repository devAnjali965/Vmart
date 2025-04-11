import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import "../../style/productCard.css"

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <Card className="product-card h-100 border-0 rounded-4 overflow-hidden shadow-sm transition-scale hover-scale">
      <div
        className="img-container bg-white d-flex align-items-center justify-content-center p-4"
        style={{ height: '220px' }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          className="product-img"
          style={{ maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.3s' }}
        />
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title
          className="text-truncate mb-2 fw-semibold fs-6 text-dark"
          title={product.title}
        >
          {product.title}
        </Card.Title>
        <Card.Text className="text-muted mb-1 small">
          Category: <span className="text-capitalize">{product.category}</span>
        </Card.Text>
        <Card.Text className="fw-bold text-black fs-5 mb-3">
          ${product.price.toFixed(2)}
        </Card.Text>
        <Button
          variant="gradient"
          className="mt-auto add-to-cart-btn px-4 py-2 rounded-2 text-white border-0 fw-medium bg-gradient mt-auto add-to-cart-btn bg-black text-white border-0"
          style={{ background: 'linear-gradient(135deg, #1f4037, #99f2c8)' }}
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          🛒 Add to Cart
        </Button>
      </Card.Body>
    </Card>

  );
};

export default ProductCard;
