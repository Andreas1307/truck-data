import React, { useState } from "react";
import truckModels from "../allTrucks";
import moreTrucks from "../moreTrucks"; // This contains additional truck info
import Header from "../components/header";
import Footer from "../components/footer";
import BackButton from "../components/backButton";

const CompareTrucks = () => {
  const [firstTruck, setFirstTruck] = useState("");
  const [secondTruck, setSecondTruck] = useState("");
  const [comparison, setComparison] = useState(null);


  const handleCompare = () => {
    const truck1 = moreTrucks
      .flatMap((brand) => brand.models)
      .find((model) => model.name === firstTruck);
    
      const truck2 = moreTrucks
      .flatMap((brand) => brand.models)
      .find((model) => model.name === secondTruck);
    
      if (truck1 && truck2) {
        setComparison([truck1, truck2])
      } else {
        setComparison(null)
      }
    console.log(comparison)
  };




  return (
    <div>
         <Header />
        
        <div className="compare-container">
           <BackButton />
      <h1>Compare Trucks</h1>
      <div className="dropdowns">
        <select
          value={firstTruck}
          onChange={(e) => setFirstTruck(e.target.value)}
        >
          <option value="">Select First Truck</option>
          {moreTrucks.map((arr) => (
           arr.models.map((engine, index) => (
            <option value={engine.name} key={index}>{arr.brand} - {arr.model} - {engine.name}</option>
           ))
          )) }


         
        </select>

        <select
          value={secondTruck}
          onChange={(e) => setSecondTruck(e.target.value)}
        >
          <option value="">Select Second Truck</option>
          {moreTrucks.map((arr) => (
           arr.models.map((engine, index) => (
            <option value={engine.name} key={index}>{arr.brand} - {arr.model} - {engine.name}</option>
           ))
          )) }
        </select>
      </div>
      <button onClick={handleCompare} className="compareButton">
        Compare
      </button>


      
      {comparison && comparison.lenght > 0 ? (
  <div className="comparison">
    <table>
        <thead>
            <tr>
                <td>Brand</td>
                <td>Horsepower</td>
                <td>Torque</td>
                <td>Engine-Type</td>
                <td>Fuel-Type</td>
                <td>Fuel-Efficiency</td>
                <td>Release Year</td>
                <td>Price</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
        {comparison.map((el) => (
            el.engines.map((eng, index) => (
                <tr key={index}>
                <td>{el.name}</td>
                <td>{eng.horsePower}</td>
                <td>{eng.technicalSpecs.torque}</td>
                <td>{eng.technicalSpecs.engineType}</td>
                <td>{eng.technicalSpecs.fuelType}</td>
                <td>{eng.fuelEfficiency}</td>
                <td>{eng.engineReleaseYear}</td>
                <td>{eng.price}</td>
            </tr> 
            ))
           
    ))}
    </tbody>
    </table>
    
  </div>
) : <h5>You have no selected any trucks to compare</h5>}
      
    </div>
    <Footer />
    </div>
    
  );
};

export default CompareTrucks;