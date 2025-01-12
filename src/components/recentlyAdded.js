import React from "react";
import { Link } from "react-router-dom";
import truckModels from "../allTrucks";
import "../App.css";

const RecentlyAdded = () => {
    return (
      <div className="recentlyAdded">
        <h2>Recently Added Trucks</h2>
        <ul>
          {truckModels.map((truck, index) => (
            <li key={index}>
                <Link to={`/trucks/${truck.brand}/${truck.models[0].name}`}>
                <img src={truck.models[0].img} />
                <div>
                  <h2>{truck.brand}  {truck.models[0].name}</h2>
                  <h3>{truck.models[0].description}</h3>
                  <span><h4>Features: </h4>
                    {truck.models[0].features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}</span>
                </div>  
              
                
                </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default RecentlyAdded;
