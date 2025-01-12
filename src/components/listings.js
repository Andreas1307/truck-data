import React from "react";
import '../App.css'

const Listings = () => {
    return (
        <section id="listings" className="listings">
    <div className="container">
      <h2>Featured Trucks</h2>
      <div className="truck-grid">
        <div className="truck-card">
          <img src="./img/featuredTruck1.png" alt="Truck 1" />
          <h3>Volvo FH16</h3>
          <p>Powerful, efficient, and designed for long hauls.</p>
          <a href="#" className="btn">View Details</a>
        </div>
        <div className="truck-card">
          <img src="./img/featuredTruck2.png" alt="Truck 2" />
          <h3>Scania R500</h3>
          <p>Top performance and industry-leading comfort.</p>
          <a href="#" className="btn">View Details</a>
        </div>
        <div className="truck-card">
          <img src="./img/featuredTruck3.png" alt="Truck 3" />
          <h3>Mercedes-Benz Actros</h3>
          <p>Technology-driven and fuel-efficient.</p>
          <a href="#" className="btn">View Details</a>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Listings