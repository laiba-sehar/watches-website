import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PopUp from '../../pages/popUp/PopUp'; 
import './Catagory.css';
import Men1 from '../../assets/MCat1.webp';
import MenS1 from '../../assets/MenS1.webp';
import MenS2 from '../../assets/MenS2.webp';
import Men2 from '../../assets/MCAT2.webp';
import MenS3 from '../../assets/MenS3.webp';
import MenS4 from '../../assets/MenS4.webp';
import Men3 from '../../assets/MCAT3.webp';
import MenS5 from '../../assets/MenS5.webp';
import MenS6 from '../../assets/MenS6.webp';
import Men4 from '../../assets/MCAT4.webp';
import MenS7 from '../../assets/MenS7.webp';
import MenS8 from '../../assets/MenS8.webp';
import Men5 from '../../assets/MCAT5.webp';
import MenS9 from '../../assets/MenS9.webp';
import MenS10 from '../../assets/MenS10.webp';
import Men6 from '../../assets/MCAT6.webp';
import MenS11 from '../../assets/MenS11.webp';
import MenS12 from '../../assets/MenS12.webp';
import Men7 from '../../assets/MCAT7.webp';
import MenS13 from '../../assets/MenS13.webp';
import MenS14 from '../../assets/MenS14.webp';
import Men8 from '../../assets/MCAT8.webp';
import MenS15 from '../../assets/MenS15.webp';
import MenS16 from '../../assets/MenS16.webp';
import Men9 from '../../assets/MCAT8.webp';
import MenS17 from '../../assets/MenS17..webp';
import MenS18 from '../../assets/MenS18webp.webp';
import Men10 from '../../assets/MCAT10.webp';
import MenS19 from '../../assets/MenS19.webp';
import MenS20 from '../../assets/MenS20.webp';

import Women1 from '../../assets/WCat1.webp';
import WomenS1 from '../../assets/WomenS1.webp';
import WomenS2 from '../../assets/WomenS2.jpg';
import Women2 from '../../assets/WCat2.webp';
import WomenS3 from '../../assets/WomenS3.webp';
import WomenS4 from '../../assets/WomenS4.webp';
import Women3 from '../../assets/WCat3.webp';
import WomenS5 from '../../assets/WomenS5.webp';
import WomenS6 from '../../assets/WomenS6.webp';
import Women4 from '../../assets/WCat4.webp';
import WomenS7 from '../../assets/WomenS7.webp';
import WomenS8 from '../../assets/WomenS8.webp';
import Women5 from '../../assets/WCat5.webp';
import WomenS9 from '../../assets/WomenS9.webp';
import WomenS10 from '../../assets/WomenS10.webp';
import Women6 from '../../assets/WCat6.webp';
import WomenS11 from '../../assets/WomenS11.webp';
import WomenS12 from '../../assets/WomenS12.webp';
import Women7 from '../../assets/WCat7.webp';

import Women8 from '../../assets/WCat8.webp';
import WomenS13 from '../../assets/WomenS13.webp';
import WomenS14 from '../../assets/WomenS14.webp';
import Women9 from '../../assets/WCat9.webp';
import WomenS15 from '../../assets/WomenS15.webp';
import WomenS16 from '../../assets/WomenS16.webp';
import Women10 from '../../assets/WCat10.webp';
import WomenS17 from '../../assets/WomenS1.webp';
import WomenS18 from '../../assets/WomenS18.webp';

import Smart1 from '../../assets/SCat1.webp';
import Smart01 from '../../assets/Smart01.webp';
import Smart02 from '../../assets/Smart02.webp'
import Smart2 from '../../assets/SCat2.webp';
import smart03 from '../../assets/Smart03.webp'
import smart04 from '../../assets/Smart04.webp'
import Smart3 from '../../assets/SCat3.webp';
import smart05 from '../../assets/Smart05.webp'
import smart06 from '../../assets/Smart06.webp'
import Smart4 from '../../assets/SCat4.webp';
import smart07 from '../../assets/Smart07.webp'
import smart08 from '../../assets/Smart08.webp'


import RoundImage from '../../components/roundImage/RoundImage';
const Catagory = () => {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [showModal, setShowModal] = useState(false);
    const [selectedWatch, setSelectedWatch] = useState(null);
  
    useEffect(() => {
      setSelectedCategory(category);
    }, [category]);
  

  const menWatches = [
    { id: 1, img: Men1, name: "AURA MODICCI", price: "$39.51", details: "View Details", images: [Men1, MenS1, MenS2], explanation: "Detailed explanation for AURA MODICCI.", expansionPanels: { about: "About AURA MODICCI...", overview: "Overview and Specs for AURA MODICCI...", warranty: "Warranty information for AURA MODICCI..." } },
    { id: 2, img: Men2, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details", images: [Men2, MenS3, MenS4], explanation: "Detailed explanation for AURA RUBY SV-6237.", expansionPanels: { about: "About AURA RUBY SV-6237...", overview: "Overview and Specs for AURA RUBY SV-6237...", warranty: "Warranty information for AURA RUBY SV-6237..." } },
    { id: 3, img: Men3, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details", images: [Men3, MenS5, MenS6], explanation: "Detailed explanation for AURA Nitro Smartwatch.", expansionPanels: { about: "About AURA Nitro Smartwatch...", overview: "Overview and Specs for AURA Nitro Smartwatch...", warranty: "Warranty information for AURA Nitro Smartwatch..." } },
    { id: 4, img: Men4, name: "AURA MODICCI", price: "$39.51", details: "View Details", images: [Men4, MenS7, MenS8], explanation: "Detailed explanation for AURA MODICCI.", expansionPanels: { about: "About AURA MODICCI...", overview: "Overview and Specs for AURA MODICCI...", warranty: "Warranty information for AURA MODICCI..." } },
    { id: 5, img: Men5, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details", images: [Men5, MenS9, MenS10], explanation: "Detailed explanation for AURA RUBY SV-6237.", expansionPanels: { about: "About AURA RUBY SV-6237...", overview: "Overview and Specs for AURA RUBY SV-6237...", warranty: "Warranty information for AURA RUBY SV-6237..." } },
    { id: 6, img: Men6, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details", images: [Men6, MenS11, MenS12], explanation: "Detailed explanation for AURA Nitro Smartwatch.", expansionPanels: { about: "About AURA Nitro Smartwatch...", overview: "Overview and Specs for AURA Nitro Smartwatch...", warranty: "Warranty information for AURA Nitro Smartwatch..." } },
    { id: 7, img: Men7, name: "AURA MODICCI", price: "$39.51", details: "View Details", images: [Men7, MenS13, MenS14], explanation: "Detailed explanation for AURA MODICCI.", expansionPanels: { about: "About AURA MODICCI...", overview: "Overview and Specs for AURA MODICCI...", warranty: "Warranty information for AURA MODICCI..." } },
    { id: 8, img: Men8, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details", images: [Men8, MenS15, MenS16], explanation: "Detailed explanation for AURA RUBY SV-6237.", expansionPanels: { about: "About AURA RUBY SV-6237...", overview: "Overview and Specs for AURA RUBY SV-6237...", warranty: "Warranty information for AURA RUBY SV-6237..." } },
    { id: 9, img: Men9, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details", images: [Men9, MenS17, MenS18], explanation: "Detailed explanation for AURA Nitro Smartwatch.", expansionPanels: { about: "About AURA Nitro Smartwatch...", overview: "Overview and Specs for AURA Nitro Smartwatch...", warranty: "Warranty information for AURA Nitro Smartwatch..." } },
    { id: 10, img: Men10, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details", images: [Men10, MenS19, MenS20], explanation: "Detailed explanation for AURA Nitro Smartwatch.", expansionPanels: { about: "About AURA Nitro Smartwatch...", overview: "Overview and Specs for AURA Nitro Smartwatch...", warranty: "Warranty information for AURA Nitro Smartwatch..." } },
  ];

  const womenWatches = [
    { id: 1, img: Women1, name: "AURA RUBY SV-6237", price: "$39.51", details: "View Details", images: [Women1, WomenS1, WomenS2], explanation: "Detailed explanation for AURA RUBY SV-6237.", expansionPanels: { about: "About AURA RUBY SV-6237...", overview: "Overview and Specs for AURA RUBY SV-6237...", warranty: "Warranty information for AURA RUBY SV-6237..." } },
    { id: 2, img: Women2, name: "AURA SWAN SV-6291-F", price: "$35.90 ", details: "View Details", images: [Women2, WomenS3, WomenS4], explanation: "Detailed explanation for AURA SWAN SV-6291-F.", expansionPanels: { about: "About AURA SWAN SV-6291-F...", overview: "Overview and Specs for AURA SWAN SV-6291-F...", warranty: "Warranty information for AURA SWAN SV-6291-F..." } },
    { id: 3, img: Women3, name: "AURA SERENE SV-6298-F", price: "$43.00 ", details: "View Details", images: [Women3, WomenS5, WomenS6], explanation: "Detailed explanation for AURA SERENE SV-6298-F", expansionPanels: { about: "About AURA SERENE SV-6298-F...", overview: "Overview and Specs for AURA SERENE SV-6298-F...", warranty: "Warranty information for AURA SERENE SV-6298-F..." } },
    { id: 4, img: Women4, name: "AURA BLING SV-6286-F", price: "$39.51", details: "View Details", images: [Women4, WomenS7, WomenS8], explanation: "Detailed explanation for AURA BLING SV-6286-F.", expansionPanels: { about: "About AURA BLING SV-6286-F...", overview: "Overview and Specs for AURA BLING SV-6286-F...", warranty: "Warranty information for AURA BLING SV-6286-F..." } },
    { id: 5, img: Women5, name: "AURA GLITZ SV-6269-F", price: "$35.90 ", details: "View Details", images: [Women5, WomenS9, WomenS10], explanation: "Detailed explanation for AURA GLITZ SV-6269-F.", expansionPanels: { about: "About AURA GLITZ SV-6269-F...", overview: "Overview and Specs for AURA GLITZ SV-6269-F...", warranty: "Warranty information for AURA GLITZ SV-6269-F..." } },
    { id: 6, img: Women6, name: "AURA CIRILLA SV-6296-F", price: "$43.00 ", details: "View Details", images: [Women6, WomenS11, WomenS12], explanation: "Detailed explanation for AURA CIRILLA SV-6296-F", expansionPanels: { about: "About AURA CIRILLA SV-6296-F...", overview: "Overview and Specs for AURA CIRILLA SV-6296-F...", warranty: "Warranty information for AURA CIRILLA SV-6296-F..." } },
    { id: 7, img: Women7, name: "AURA GLORIA SV-6255-F", price: "$39.51", details: "View Details", images: [Women7, WomenS13, WomenS14], explanation: "Detailed explanation for AURA GLORIA SV-6255-F.", expansionPanels: { about: "AURA GLORIA SV-6255-F...", overview: "Overview and Specs for AURA GLORIA SV-6255-F...", warranty: "Warranty information for AURA GLORIA SV-6255-F..." } },
    { id: 8, img: Women8, name: "AURA ROLF SV-6244-F", price: "$35.90 ", details: "View Details", images: [Women8, WomenS15, WomenS16], explanation: "Detailed explanation for AURA ROLF SV-6244-F.", expansionPanels: { about: "About AURA ROLF SV-6244-F...", overview: "Overview and Specs for AURA ROLF SV-6244-F...", warranty: "Warranty information for AURA ROLF SV-6244-F..." } },
    { id: 9, img: Women9, name: "AURA BLOSSOM SV-6261-F", price: "$43.00 ", details: "View Details", images: [Women9, WomenS17, WomenS18], explanation: "Detailed explanation for AURA BLOSSOM SV-6261-F", expansionPanels: { about: "About AURA BLOSSOM SV-6261-F...", overview: "Overview and Specs for AURA BLOSSOM SV-6261-F...", warranty: "Warranty information for AURA BLOSSOM SV-6261-F..." } },
    { id: 10, img: Women10, name: "AURA CLOUDIA SV- 6256-F", price: "$43.00 ", details: "View Details", images: [Women10, WomenS17, WomenS18], explanation: "Detailed explanation for AURA CLOUDIA SV- 6256-F.", expansionPanels: { about: "About AURA CLOUDIA SV- 6256-F...", overview: "Overview and Specs for AURA CLOUDIA SV- 6256-F...", warranty: "Warranty information for AURA CLOUDIA SV- 6256-F..." } },
  ];

  const smartWatches = [
    { id: 1, img: Smart1, name: "AURA MODICCI", price: "$39.51", details: "View Details", images: [Smart1, Smart01, Smart02], explanation: "Detailed explanation for AURA MODICCI.", expansionPanels: { about: "About AURA MODICCI...", overview: "Overview and Specs for AURA MODICCI...", warranty: "Warranty information for AURA MODICCI..." } },
    { id: 2, img: Smart2, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details", images: [Smart2, smart03, smart04], explanation: "Detailed explanation for AURA RUBY SV-6237.", expansionPanels: { about: "About AURA RUBY SV-6237...", overview: "Overview and Specs for AURA RUBY SV-6237...", warranty: "Warranty information for AURA RUBY SV-6237..." } },
    { id: 3, img: Smart3, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details", images: [Smart3, smart05, smart06], explanation: "Detailed explanation for AURA Nitro Smartwatch.", expansionPanels: { about: "About AURA Nitro Smartwatch...", overview: "Overview and Specs for AURA Nitro Smartwatch...", warranty: "Warranty information for AURA Nitro Smartwatch..." } },
    { id: 4, img: Smart4, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details", images: [Smart4, smart07, smart08], explanation: "Detailed explanation for AURA Nitro Smartwatch.", expansionPanels: { about: "About AURA Nitro Smartwatch...", overview: "Overview and Specs for AURA Nitro Smartwatch...", warranty: "Warranty information for AURA Nitro Smartwatch..." } },
  ];


  let watchesData = [];
  switch (selectedCategory) {
    case 'men':
      watchesData = menWatches;
      break;
    case 'women':
      watchesData = womenWatches;
      break;
    case 'smart':
      watchesData = smartWatches;
      break;
    default:
      watchesData = menWatches; // Default to men watches
  }

  const handleViewDetails = (watch) => {
    setSelectedWatch(watch);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWatch(null);
  };

  return (
    <div className="category-page">
      <RoundImage />
      <h1 className="category-heading">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Watches</h1>
      <div className="category-grid">
        {watchesData.map((watch) => (
          <div key={watch.id} className="category-card">
            <img src={watch.img} alt={watch.name} className="product-image" />
            <div className="category-info">
              <h2 className="category-name">{watch.name}</h2>
              <div className="category-details">
                <span className="category-price">{watch.price}</span>
                <button className="category-button" onClick={() => handleViewDetails(watch)}>
                  {watch.details}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedWatch && (
        <PopUp show={showModal} handleClose={handleCloseModal} watch={selectedWatch} />
      )}
    </div>
  );
};

export default Catagory;