import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import truckModels from "../allTrucks";

const Header = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  const showResults = (value) => {
    if (!value.trim()) {
      setFilteredResults([]);
      return;
    }
    const results = truckModels.flatMap((brandObj) => {
      const matchingModels = brandObj.models.filter((model) =>
        model.name.toLowerCase().includes(value.toLowerCase())
      );
      const isBrandMatch = brandObj.brand.toLowerCase().includes(value.toLowerCase());

      // If brand matches, include all its models
      if (isBrandMatch) {
        return brandObj.models.map((model) => ({
          ...model,
          brand: brandObj.brand,
        }));
      }

      // Otherwise, include only matching models
      return matchingModels.map((model) => ({
        ...model,
        brand: brandObj.brand,
      }));
    });

    setFilteredResults(results);
  };

  return (
    <header>
      
      <div className="nav">
        <Link to="/">
          <img src="/img/small-logo.png" alt="Logo" />
          <h1>TruckData</h1>
        </Link>
        <span>
          <input
            onChange={(e) => {
              showResults(e.target.value);
            }}
            type="text"
            placeholder="Search for a truck brand or model"
          />
           <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          {filteredResults.length > 0 && (
        <div className="search-results">
          <ul>
            {filteredResults.map((result, index) => (
              <li key={index}>
                <Link to={`/trucks/${result.brand}/${result.name}`}>
                  {result.brand} - {result.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

        </span>
      </div>
    </header>
  );
};

export default Header;
