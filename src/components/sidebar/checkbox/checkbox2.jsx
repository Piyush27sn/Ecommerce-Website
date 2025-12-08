import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const conditionOptions = [
  { label: "New", count: 1506 },
  { label: "Refurbished", count: 27 },
  { label: "Used", count: 45 },
];

export const Checkbox2 = () => {
  const [selectedConditions, setSelectedConditions] = useState({
    New: false,
    Refurbished: false,
    Used: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSelectedConditions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="h6" gutterBottom>
        Item Condition
      </Typography>
      <FormGroup>
        {conditionOptions.map(({ label, count }) => (
          <FormControlLabel
            key={label}
            control={
              <Checkbox
                checked={selectedConditions[label]}
                onChange={handleChange}
                name={label}
                sx={{
                  padding: 0.5,
                  color: "#555", // unchecked color
                  "&.Mui-checked": {
                    color: "#000", // checked color
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
