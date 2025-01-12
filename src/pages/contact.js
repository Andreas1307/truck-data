import React from "react";
import "../App.css"; 
import BackButton from "../components/backButton";

const Contact = () => {
    return (
        <div className="modernContactPage">
            <BackButton />
            <div className="contactLeft">
                <div className="glassContainer">
                    <h1>Contact Us</h1>
                    <p>
                        We’d love to hear from you! Whether you have a question about our services,
                        need support, or just want to say hello, feel free to reach out.
                    </p>
                    <form className="modernContactForm">
                        <input type="text" placeholder="Your Full Name" required />
                        <input type="email" placeholder="Your Email Address" required />
                        <textarea rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="contactRight">
                <div className="imageOverlay">
                    <img src="/img/contact-image.png" alt="Contact Us" className="contactImage" />
                </div>
                <div className="contactDetails">
                    <h2>Contact Information</h2>
                    <p>
                        <strong>Address:</strong> 123 TruckData Lane, Cityville, ST 12345
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p>
                        <strong>Email:</strong> contact@truckdata.com
                    </p>
                    <div className="socialIcons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
