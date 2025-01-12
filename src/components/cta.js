import React from "react";
import { Link } from "react-router-dom"
import '../App.css'

const Cta = () => {
    return (
        <section className="cta">
    <div className="container">
      <h2>Not Sure What Truck To Pick?</h2>
      <p>Compare features, performance, and prices to find the perfect truck for your needs!</p>
      <Link to="/trucks/compare" className="btn">Compare</Link>
    </div>
  </section>

    )
}
 
export default Cta