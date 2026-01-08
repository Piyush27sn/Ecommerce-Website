import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


function valuetext(value) {
  return `${value}`;
}

export const PriceRangeSlider = ({ value, onChange }) => {

  const [internalValue, setInternalValue] = React.useState(value);

  const handleChange = (event, newValue) => {
    setInternalValue(newValue);
    onChange(event, newValue);
  };

  React.useEffect(() => {
  setInternalValue(value);
}, [value]);


  return (
    <Box sx={{ width: 200, mt: 2 }}>
      <Slider
        value={internalValue}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={10}
        max={60000}
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
        From: ₹{internalValue[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: ₹{internalValue[1]}
      </Box>
    </Box>
  );
};
