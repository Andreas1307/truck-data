import React from "react";
import { useParams, Link } from "react-router-dom";
import truckModels from "../allTrucks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TruckDetails = () => {
  const { brand } = useParams(); // Get the 'brand' from URL
  const truck = truckModels.find((t) => t.brand.toLowerCase() === brand.toLowerCase()); // Match the truck by brand

  if (!truck) {
    return <div>Truck not found.</div>; // Handle case where no truck matches
  }

  return (
    <div style={{
      backgroundImage: `url(${truck.bgImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom left',
      backgroundSize: "240px"
    }} className="truckBox">

    
    <div className="truck-details">
      <span className="goBack"><Link to="/trucks"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link></span>
      <h1>{truck.brand}</h1>
      {truck.models && truck.models.length > 0 ? ( // Check if models exist
        <>
          <h2>Models:</h2>
          <ul className="truckModels">
            {truck.models.map((model, index) => (
              <Link to={`/trucks/${truck.brand}/${model.name}`} key={index}>
                
              <li className="truckListItem" >
                <div>
                <h3>{truck.brand}  {model.name}</h3>
                <p>{model.description}</p>
                <p>Capacity: {model.capacity}</p>
                <p>Features:</p>
                <ul>
                  {model.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
        </div>
                <img src={model.img} />
              </li>
              </Link>
            ))}
          </ul>
        </>
      ) : (
        <p>No models available for this truck.</p>
      )}
    </div>
    </div>
  );
};

export default TruckDetails;