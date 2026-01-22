import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Form } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./location.css";

export const Location = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Location");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get("https://countriesnow.space/api/v0.1/countries/");
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
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        className="btnLocation d-flex align-items-center gap-1"
      >
        <LocationOnIcon className="locationIcon" />
        {selectedCountry}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
        {/* Search box inside dropdown */}
        <Form.Control
          type="text"
          placeholder="Search country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2 mx-2"
        />

        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <Dropdown.Item key={index} onClick={() => handleSelect(country)}>
              {country}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.ItemText className="text-muted">
            No matches found
          </Dropdown.ItemText>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};