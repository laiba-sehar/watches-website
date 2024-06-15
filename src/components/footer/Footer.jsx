import React from 'react'
// import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
// import { FaTwitter, FaFacebook, FaInstagram } from '@fortawesome/react-fontawesome';

import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
        <div className='footer-container '>
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Shop Aura</h3>
              <ul>
                <li><a href="#about">Mens Watches</a></li>
                <li><a href="#careers">Womens Watches</a></li>
                <li><a href="#blog">Smart Watches</a></li>
             
              </ul>
            </div>
            <div className="footer-column">
              <h3>Customer Care</h3>
              <ul>
                <li><a href="#help">Contact Us</a></li>
                <li><a href="#terms">Watches Maintenance tips</a></li>
                <li><a href="#privacy">Price list of All Watches</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li><a href="#docs">Our story</a></li>
                <li><a href="#api">Technology</a></li>

              </ul>
            </div>
          </div>
          <div className="footer-subscription">
            <h4>Subscribe to our newsletter</h4>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="subscription-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="button">Subscribe</button>
            </div>
          </div>
          </div>
          <hr />
          
          <div className="footer-bottom">
                <span>© 2024 Aura. All rights reserved.</span>
                <div className="social-links">
                    <a href="#twitter"><IoLogoTwitter /></a>
                    <a href="#facebook"><FaFacebook /></a>
                    <a href="#instagram"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer