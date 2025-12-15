import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const colorOptions = [
  { label: "Red", count: 56 },
  { label: "Green", count: 78 },
  { label: "Blue", count: 54 },
];

export const Checkbox1 = () => {
  const [selectedColors, setSelectedColors] = useState({
    Red: false,
    Green: false,
    Blue: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSelectedColors((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="h6" gutterBottom>
        Filter by color
      </Typography>
      <FormGroup>
        {colorOptions.map(({ label, count }) => (
          <FormControlLabel
            key={label}
            control={
              <Checkbox
                checked={selectedColors[label]}
                onChange={handleChange}
                name={label}
                color={label.toLowerCase()} // <-- MUI supports "primary", "secondary", or custom theme colors
                sx={{
                  padding: 0.5,
                  color: label.toLowerCase(), // unchecked color
                  "&.Mui-checked": {
                    color: label.toLowerCase(), // checked color
                  },
                }}
              />
            }
            label={`${label} (${count})`}
            sx={{
              marginBottom: "0px",
            }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};
