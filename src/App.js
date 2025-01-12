import React from "react"
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Cta from "./components/cta";
import Blog from "./components/blog"
import Testimonials from "./components/testimonials"
import ContactNnewsletter from './components/contactNnewsletter'
import Listings from "./components/listings";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Homepage">
      <Header />
      <div className="hp">
      <section className="hero">
    <div className="container hero-content">
      <h1>Explore Truck Data Like Never Before</h1>
      <p>Discover detailed specifications, models, and advanced analytics for trucks.</p>
      <Link to="/trucks" className="btn">Learn More</Link>
      <Link className="btn secondary" to={"/trucks"}>Browse Trucks</Link>
    </div>
  </section>

  
  <section id="features" className="features">
    <div className="container">
      <h2>Why Choose TruckData?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-database"></i>
          <h3>Comprehensive Data</h3>
          <p>Access detailed truck data with the latest information available.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-filter"></i>
          <h3>Advanced Filters</h3>
          <p>Easily search and filter trucks to find exactly what you need.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Reliable Information</h3>
          <p>Trusted by industry professionals for accurate and dependable data.</p>
        </div>
      </div>
    </div>
  </section>

  
  <Listings />


 <Testimonials />


  <Blog />

  
  <Cta />


 






<ContactNnewsletter />



      </div>

 <Footer />

      
    </div>
  );
}

export default App;
