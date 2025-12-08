import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value) {
  return `${value}`;
}

export const PriceRangeSlider = () => {
  const [value, setValue] = React.useState([1, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200, mt: 2 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={1}
        max={1000}
        getAriaValueText={valuetext}
        sx={{
          color: "blue",
          "& .MuiSlider-thumb": {
            backgroundColor: "#ff6600",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#ff6600",
            border: "none",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ff6600",
          },
          
        }}
      />
      <Box sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
        From: ₹{value[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: ₹{value[1]}
      </Box>
    </Box>
  );
};
