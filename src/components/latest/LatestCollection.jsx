import React, { useState } from 'react';
import first from '../../assets/1.webp';
import second from '../../assets/2.webp';
import third from '../../assets/3.webp';
import fourth from '../../assets/4.webp';
import './LatestCollection.css';
import PopUp from '../../pages/popUp/PopUp';

function LatestCollection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const products = [
    {
      id: 1,
      img: first,
      name: "AURA MODICCI",
      price: "$39.51",
      details: "View Details",
      images: [first],
      explanation: "Detailed explanation for AURA MODICCI.",
      expansionPanels: {
        about: "About AURA MODICCI...",
        overview: "Overview and Specs for AURA MODICCI...",
        warranty: "Warranty information for AURA MODICCI...",
      },
    },
    {
      id: 2,
      img: second,
      name: "AURA RUBY SV-6237",
      price: "$35.90",
      details: "View Details",
      images: [second],
      explanation: "Detailed explanation for AURA RUBY SV-6237.",
      expansionPanels: {
        about: "About AURA RUBY SV-6237...",
        overview: "Overview and Specs for AURA RUBY SV-6237...",
        warranty: "Warranty information for AURA RUBY SV-6237...",
      },
    },
    {
      id: 3,
      img: third,
      name: "AURA Nitro Smartwatch",
      price: "$43.00",
      details: "View Details",
      images: [third],
      explanation: "Detailed explanation for AURA Nitro Smartwatch.",
      expansionPanels: {
        about: "About AURA Nitro Smartwatch...",
        overview: "Overview and Specs for AURA Nitro Smartwatch...",
        warranty: "Warranty information for AURA Nitro Smartwatch...",
      },
    },
    {
      id: 4,
      img: fourth,
      name: "AURA Prestige Smartwatch",
      price: "$46.50",
      details: "View Details",
      images: [fourth],
      explanation: "Detailed explanation for AURA Prestige Smartwatch.",
      expansionPanels: {
        about: "About AURA Prestige Smartwatch...",
        overview: "Overview and Specs for AURA Prestige Smartwatch...",
        warranty: "Warranty information for AURA Prestige Smartwatch...",
      },
    },
  ];

  return (
    <div className="product-page">
      <h1 className="page-heading">Check out our Latest Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <div className="product-details">
                <span className="product-price">{product.price}</span>
                <button className="details-button" onClick={() => handleShow(product)}>
                  {product.details}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <PopUp show={showModal} handleClose={handleClose} watch={selectedProduct} />
      )}
    </div>
  );
}

export default LatestCollection;
