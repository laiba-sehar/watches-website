import React from 'react';
import Men from '../../assets/menWa.png';
import Women from '../../assets/womenWa.png';
import Smart from '../../assets/smartWa.png';
import './Catagory.css'


function Catagory() {
    const catagory=[
        {id:1,img:Men,name:"Men's Collection",details:"Make a Bold statement with Aura Men Timeplaces",button:"View Details"},
        {id:1,img:Women,name:"Women’s Collection",details:"$Unleash your Feminine Corn with Women Timespaces",button:"View Details"},
        {id:1,img:Smart,name:"Smart Collection",details:"Experience the Fusion of Durability and Style in our Smart Watch Chronograph Collection",button:"View Details"},
    ]
    return (
        <div className="catagory-page">
        <h1 className="catagory-heading">Discover our Range: Explore our Product Categories</h1>
        <div className="catagory-grid">
          {catagory.map(cat => (
            <div key={cat.id} className="catagory-card">
              <img src={cat.img} alt={cat.name} className="catagory-image" />
              <div className="catagory-info">
                <h2 className="catagory-name">{cat.name}</h2>
                <div className="catagory-details">
                  <span className="catagory-price">{cat.details}</span>
                  <button className="catagory-button">{cat.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )
}

export default Catagory