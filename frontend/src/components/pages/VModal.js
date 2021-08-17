import React, {useState} from 'react';
import { Entity, Scene } from "aframe-react";
import Modal from 'react-bootstrap/Modal'


const VModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <button id = "on" onClick={showModal}>Display Modal</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body>The body</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

export default VModal