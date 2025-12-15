import React, { useEffect, useState } from "react";
import axios from "axios";
import "./location.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Location = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Location");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/"
        );
        if (res.data && res.data.data) {
          setCountries(res.data.data.map((item) => item.country));
        }
      } catch (error) {
        console.log("Error fetching countries:", error.message);
      }
    };

    getCountry();
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <button
        className="btnLocation dropdown-toggle d-flex align-items-center justify-content-center gap-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <LocationOnIcon className="locationIcon" />
        {selectedCountry}
      </button>

      <ul className="dropdown-menu">
        <li>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </li>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(country)}
              >
                {country}
              </button>
            </li>
          ))
        ) : (
          <li>
            <span className="dropdown-item-text text-muted">
              No matches found
            </span>
          </li>
        )}

        {countries.length > 0 ? (
          countries.map((country, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(country)}
              >
                {country}
              </button>
            </li>
          ))
        ) : (
          <li>
            <span className="dropdown-item-text">Loading...</span>
          </li>
        )}
      </ul>
    </div>
  );
};
