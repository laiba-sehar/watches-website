import React from 'react'
import background from '../../assets/dark-blue-product-background_53876-92997.avif'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-page" style={{ backgroundImage: `url(${background})` }}>
          <div className="contact-container">
            <h1 className="contact-heading">GET IN TOUCH</h1>
            <div className="contact-info">
              <div className="contact-item">Phone: +1 234 567 890</div>
              <div className="contact-item">
                Email: <span style={{ color: 'white' }}>info@example.com</span>
              </div>
              <div className="contact-item">Address: 123 Main St, Anytown, USA</div>
            </div>
            <div className="contact-form">
              <div className="form-left">
                <input type="text" className="form-input" placeholder="YOUR NAME*" />
                <input type="email" className="form-input" placeholder="YOUR EMAIL*" />
                <input type="text" className="form-input" placeholder="YOUR PHONE*" />
              </div>
              <div className="form-right">
                <textarea className="form-textarea" placeholder="YOUR MESSAGE"></textarea>
              </div>
            </div>
            <button className="send-button">SEND MESSAGE</button>
          </div>
        </div>
    );
}

export default Contact