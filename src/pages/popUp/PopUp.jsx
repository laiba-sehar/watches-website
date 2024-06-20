import React from 'react';
import { Modal, Button, Carousel, Accordion } from 'react-bootstrap';
import './PopUp.css';

const PopUp = ({ show, handleClose, watch }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{watch.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content-container">
          <div className="slider-container">
            <Carousel>
              {watch.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="d-block w-100" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="details-container">
            <h2>{watch.name}</h2>
            <p className="price">{watch.price}</p>
            <p className="description">{watch.explanation}</p>
            <Button className="buy-now-button">Buy Now</Button>
          </div>
        </div>
        <Accordion defaultActiveKey="0" className="mt-4">
          <Accordion.Item eventKey="1">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>{watch.expansionPanels.about}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Overview & Specs</Accordion.Header>
            <Accordion.Body>{watch.expansionPanels.overview}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Warranty</Accordion.Header>
            <Accordion.Body>{watch.expansionPanels.warranty}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
