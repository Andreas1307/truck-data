import React from "react";
import '../App.css'

const ContactNnewsletter = () => {
    return (
<section className="contact-newsletter">
  <div className="container">
    <h2 className="section-title">Stay Connected</h2>
    <p className="section-description">
      Have questions or want to stay updated? Contact us or subscribe to our newsletter!
    </p>
    <div className="contact-newsletter-container">

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <div className="form-group">
            <label htmlFor="newsletter-email">Email</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}
export default ContactNnewsletter