import React from 'react'
import first from '../../assets/1.webp';
import second from '../../assets/2.webp';
import third from '../../assets/3.webp';
import fourth from '../../assets/4.webp';
import './LatestCollection.css'

function LatestCollection() {
    const products=[
        {id:1,img:first,name:"AURA MODICCI",price:"$39.51",details:"View Details"},
        {id:1,img:second,name:"AURA RUBY SV-6237",price:"$35.90 ",details:"View Details"},
        {id:1,img:third,name:"AURA Nitro Smartwatch",price:"$43.00 ",details:"View Details"},
        {id:1,img:fourth,name:"AURA Prestige Smartwatch",price:"$46.50 ",details:"View Details"},
    ]
  return (
    <div className="product-page">
    <h1 className="page-heading">Check out our Latest Collection</h1>
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <div className="product-details">
              <span className="product-price">{product.price}</span>
              <button className="details-button">{product.details}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default LatestCollection