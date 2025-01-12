import React from "react";
import { Link } from "react-router-dom"
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
      <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <h3>About TruckData</h3>
            <p>TruckData is your trusted partner for finding the perfect trucks for your business. Explore our database and join thousands of professionals today.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/trucks">Trucks</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:support@truckdata.com">support@truckdata.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 TruckData. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer