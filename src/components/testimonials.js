import React from "react";
import '../App.css'


const Testimonials = () => {
    return (
        <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"TruckData helped us find the perfect trucks for our fleet. Highly recommend their platform!"</p>
              <h4>John D.</h4>
              <small>Fleet Manager</small>
            </div>
            <div className="testimonial-card">
              <p>"The detailed specifications and easy-to-use filters made my decision-making so much easier."</p>
              <h4>Sarah L.</h4>
              <small>Logistics Expert</small>
            </div>
            <div className="testimonial-card">
              <p>"Reliable and accurate data. TruckData is my go-to resource for truck information."</p>
              <h4>Michael B.</h4>
              <small>Independent Contractor</small>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Testimonials