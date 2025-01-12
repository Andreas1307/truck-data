import React, { useState} from "react";
import { useParams, Link } from "react-router-dom";
import truckModels from "../allTrucks";
import moreTrucks from "../moreTrucks";
import Header from "../components/header";
import BackButton from "../components/backButton";

const MoreTrucksPage = () => {
    const [ fullScreen, setFullScreen ] = useState(null)
    const { name, brand } = useParams()
    const brandTruck = truckModels.find((t) => t.brand.toLocaleLowerCase() === brand.toLocaleLowerCase())
    const truck = moreTrucks.find((t) => t.model.toLocaleLowerCase() === name.toLocaleLowerCase())
    
    const openFullscreen = (img) => {
        setFullScreen(img)
    }
    const closeFullScreen = () => {
        setFullScreen(null)
    }
    
    return (

        <div>



            {fullScreen && (
                <div onClick={closeFullScreen} className="fullscreenOverlay">
                    <div className="fullscreenImageContainer">
            <img
                src={fullScreen}
                alt="Fullscreen"
                className="fullscreenImage"
            />
        </div>
                </div>
            )}




            <Header />
            <div className="moreTrucks">
                <BackButton />
        <h1>{brandTruck.brand} {truck.model} details and engine types</h1>
            <img
            onClick={() => openFullscreen(brandTruck.info)}
            src={brandTruck.info} />
            <ul>
                {truck.models.map((model, index) => (
                    <Link to={`/trucks/${brandTruck.brand}/${truck.model}/${model.name}`} key={index}>
                        <li>
                        {model.engines.map((engine, engineIndex) => (
                            <div key={engineIndex}>
                                <h3>{engine.name}</h3>
                                <h2>{engine.engineReleaseYear}</h2> 
                                <span>
                                    {model.features.map((f, idx) => (
                                        <div key={idx}>
                                            <p>{f}</p>
                                        </div>
                                    ))}
                                </span>
                            </div>
                        ))}
                            
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
        </div>
        
    )
}

export default MoreTrucksPage