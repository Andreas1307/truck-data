import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import truckModels from "./allTrucks";
import moreTrucks from "./moreTrucks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackButton from "./components/backButton";
import Header from "./components/header";
import Footer from "./components/footer";






const TruckSpecs = () => {

    const { brand, name, model } = useParams()
    const truck = moreTrucks
    .flatMap((elem) => elem.models) // Flatten all models into a single array
    .find((t) => t.name.toLowerCase() === model.toLowerCase());
    const truckName = moreTrucks.find((t) => t.model.toLowerCase() === name.toLowerCase())
    
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const openFullscreen = (img) => {
        setFullscreenImage(img);
    };

    const closeFullscreen = () => {  
        setFullscreenImage(null);
    };
    
    
    return (
        <div>
           <Header />
        <div className="truckSpecDiv">


{fullscreenImage && (
    <div className="fullscreenOverlay">
        <button onClick={closeFullscreen} className="closeButton">Close</button>
        <div className="fullscreenImageContainer">
            <img
                src={fullscreenImage}
                alt="Fullscreen"
                className="fullscreenImage"
            />
        </div>
        <div className="thumbnailContainer">
            {truckName.imgs.map((img, index) => (
                <img
                   src={img}
                   key={index}
                   alt={`Thumbnail ${index}`}
                   className={`thumbnail ${img === fullscreenImage ? `active` : ``}`}
                   onClick={() => setFullscreenImage(img)}
                />
            ))}
        </div>
    </div>
)}



<BackButton />
            <h1>{brand} {name} {model} <span>({truck.engines.map((e) => e.name)})</span></h1>
            <div className="truckSpec" >
                <div className="images">
                    {truckName.imgs.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Truck ${index}`}
                onClick={() => openFullscreen(img)}
            />
            ))}
                </div>
                <div className="specs">
                    <h3>General Information</h3>
                    <table>
    <tbody>
        <tr>
            <td>Brand</td>
            <td>{brand}</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>{model}</td>
        </tr>
        <tr>
            <td>Generation</td>
            <td>{truck.name}</td>
        </tr>
        <tr>
            <td>Engine</td>
            <td>
                {truck.engines.map((engine, index) => (
                    <div key={index}>{engine.name}</div>
                ))}
            </td>
        </tr>
        <tr>
            <td>Start of production</td>
            <td>
                {truck.engines.map((engine, index) => (
                    <div key={index}>{engine.engineReleaseYear}</div>
                ))}
            </td>
        </tr>
        <tr>
            <td>End of production</td>
            <td>
                {truck.engines.map((engine, index) => (
                    <div key={index}>{engine.engineEndYear}</div>
                ))}
            </td>
        </tr>
        <tr>
            <td>Powertrain Architecture</td>
            <td>Internal Combustion Engine</td>
        </tr>
        <tr>
            <td>Seats</td>
            <td>{truck.seats || "2"}</td>
        </tr>
        <tr>
            <td>Doors</td>
            <td>{truck.doors || "2"}</td>
        </tr>
        <tr>
            <td>Outside Lockers</td>
            <td>{truck.lockers || "2"}</td>
        </tr>
        <tr>
            <td>Beds</td>
            <td>{truck.beds || "1"}</td>
        </tr>
    </tbody>
</table>


                    <h3>Engine Specification</h3>
                    <table>
    <tbody>
        {truck.engines.map((engine, index) => (
            <React.Fragment key={index}>
                <tr>
                    <td>Power</td>
                    <td>{engine.horsePower} HP</td>
                </tr>
                <tr>
                    <td>Pulling Power</td>
                    <td>{engine.pullingPower}</td>
                </tr>
                <tr>
                    <td>Fuel Efficiency</td>
                    <td>{engine.fuelEfficiency}</td>
                </tr>
                <tr>
                    <td>Engine Type</td>
                    <td>{engine.technicalSpecs.engineType}</td>
                </tr>
                <tr>
                    <td>Torque</td>
                    <td>{engine.technicalSpecs.torque}</td>
                </tr>
                <tr>
                    <td>Transmission</td>
                    <td>{engine.technicalSpecs.transmission}</td>
                </tr>
                <tr>
                    <td>Fuel Type</td>
                    <td>{engine.technicalSpecs.fuelType}</td>
                </tr>
            </React.Fragment>
        ))}
    </tbody>
</table>

                    <h3>More Info</h3>
                    <table>
    <tbody>
        {truck.engines.map((engine, index) => (
            <React.Fragment key={index}>
                <tr>
                    <td>Driver Behavior</td>
                    <td>{engine.driverBehavior}</td>
                </tr>
                <tr>
                    <td>Maintenance Costs</td>
                    <td>{engine.maintenanceCosts}</td>
                </tr>
                <tr>
                    <td>Reliability</td>
                    <td>{engine.reliability}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{engine.price}</td>
                </tr>
            </React.Fragment>
        ))}
    </tbody>
</table>

                </div>
            </div>
            <Link className="compareBtn" to="/trucks/compare">Can't decide what truck to pick? Compare trucks</Link>
        </div> 
        <Footer />
        </div>
        
    )
  
};

export default TruckSpecs;