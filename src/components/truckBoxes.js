import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const TruckBoxes = () => {
    return (
        <div className="truckBoxes">
        <Link to="/trucks/Scania">
          <div>
            <img src="./img/scania-logo.png" alt="Scania" />
            <p>Scania</p>
          </div>
        </Link>
        <Link to="/trucks/Volvo">
          <div>
            <img src="./img/volvo-logo.png" alt="Volvo" />
            <p>Volvo</p>
          </div>
        </Link>
        <Link to="/trucks/Daf">
          <div>
            <img src="./img/daf-logo.png" alt="Daf" />
            <p>Daf</p>
          </div>
        </Link>
        <Link to="/trucks/Mercedes-Benz">
          <div>
            <img src="./img/mercedes-logo.png" alt="Mercedes" />
            <p>Mercedes</p>
          </div>
        </Link>
        <Link to="/trucks/Man">
          <div>
            <img src="./img/man-logo.png" alt="Man" />
            <p>Man</p>
          </div>
        </Link>
        <Link to="/trucks/Renault">
          <div>
            <img src="./img/renault-logo.png" alt="Renault" />
            <p>Renault</p>
          </div>
        </Link>
        <Link to="/trucks/Ford">
          <div>
            <img src="./img/ford-logo.png" alt="Ford" />
            <p>Ford</p>
          </div>
        </Link>
        <Link to="/trucks/Iveco">
          <div>
            <img src="./img/iveco-logo.png" alt="Iveco" />
            <p>Iveco</p>
          </div>
        </Link>
    </div>
);
};


export default TruckBoxes