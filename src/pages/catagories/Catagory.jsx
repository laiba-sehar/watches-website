import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Catagory.css';
import Men1 from '../../assets/MCat1.webp';
import Men2 from '../../assets/MCAT2.webp';
import Men3 from '../../assets/MCAT3.webp';
import Men4 from '../../assets/MCAT4.webp';
import Men5 from '../../assets/MCAT5.webp';
import Men6 from '../../assets/MCAT6.webp';
import Men7 from '../../assets/MCAT7.webp';
import Men8 from '../../assets/MCAT8.webp';
import Men9 from '../../assets/MCAT8.webp';
import Men10 from '../../assets/MCAT10.webp';

import Women1 from '../../assets/WCat1.webp';
import Women2 from '../../assets/WCat2.webp';
import Women3 from '../../assets/WCat3.webp';
import Women4 from '../../assets/WCat4.webp';
import Women5 from '../../assets/WCat5.webp';
import Women6 from '../../assets/WCat6.webp';
import Women7 from '../../assets/WCat7.webp';
import Women8 from '../../assets/WCat8.webp';
import Women9 from '../../assets/WCat9.webp';
import Women10 from '../../assets/WCat10.webp';

import Smart1 from '../../assets/SCat1.webp';
import Smart2 from '../../assets/SCat2.webp';
import Smart3 from '../../assets/SCat3.webp';
import Smart4 from '../../assets/SCat4.webp';


import RoundImage from '../../components/roundImage/RoundImage';

const GenericWatchPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  const menWatches = [
    { id: 1, img: Men1, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 2, img: Men2, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 3, img: Men3, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 4, img: Men4, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 5, img: Men5, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 6, img: Men6, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 7, img: Men7, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 8, img: Men8, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 9, img: Men9, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 10, img: Men10, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    // Add more men watches
  ];

  const womenWatches = [
    { id: 1, img: Women1, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 2, img: Women2, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 3, img: Women3, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 4, img: Women4, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 5, img: Women5, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 6, img: Women6, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 7, img: Women7, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 8, img: Women8, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 9, img: Women9, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 10, img: Women10, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    // Add more women watches
  ];

  const smartWatches = [
    { id: 1, img: Smart1, name: "AURA MODICCI", price: "$39.51", details: "View Details" },
    { id: 2, img: Smart2, name: "AURA RUBY SV-6237", price: "$35.90 ", details: "View Details" },
    { id: 3, img: Smart3, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    { id: 4, img: Smart4, name: "AURA Nitro Smartwatch", price: "$43.00 ", details: "View Details" },
    // Add more smart watches
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
                <button className="category-button">{watch.details}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenericWatchPage;
