
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cartSelector } from '../../redux/selectors';
import ShoppingTable from '../Table/ShoppingTable';
import { useSelector } from 'react-redux';
export default function ShoppingCart() {
    const shoppingCartStore = useSelector(cartSelector);
    console.log(shoppingCartStore);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="" onClick={handleShow}>
            <img src="/images/cart-icon.svg"></img>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><ShoppingTable shoppingCartStore={shoppingCartStore}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
