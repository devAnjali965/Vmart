import React from 'react';
import { Modal, Button, ListGroup, Image, InputGroup } from 'react-bootstrap';
import { FaShoppingCart, FaTrashAlt, FaTrashRestoreAlt } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import "../../style/cartModal.css"

const CartModal = ({ show, handleClose }) => {
  const { cart, dispatch, getTotal } = useCart();

  return (
    <Modal show={show} onHide={handleClose} size="md" centered>
      <Modal.Header closeButton className="bg-black text-white custom-modal-header">
        <Modal.Title><FaShoppingCart className="me-2" /> Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="cart-modal-body">
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted">Your cart is empty.</p>
          </div>
        ) : (
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex align-items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded"
                  style={{ height: '60px', width: '60px', objectFit: 'contain', background: '#f8f9fa' }}
                />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{item.title}</div>
                  <div className="text-muted small">${item.price.toFixed(2)}</div>
                </div>
                <InputGroup size="sm" className="quantity-controls">
                  <Button
                    variant="outline-secondary"
                    onClick={() => dispatch({ type: 'DECREMENT_QTY', payload: item.id })}
                  >-</Button>
                  <div className="qty-display px-2">{item.qty}</div>
                  <Button
                    variant="outline-secondary"
                    onClick={() => dispatch({ type: 'INCREMENT_QTY', payload: item.id })}
                  >+</Button>
                </InputGroup>
                <Button
                  variant="danger"
                  size="sm"
                  className="trash-btn"
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                >
                  <FaTrashAlt />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      {cart.length > 0 && (
        <Modal.Footer className="justify-content-between bg-light rounded-bottom">
          <h5 className="mb-0">Total: <span className="text-black">${getTotal()}</span></h5>
          <Button className='bg-black border-0' onClick={handleClose}>Proceed to Checkout</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CartModal;

