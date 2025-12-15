import React from "react";
import "./sidebar2.css";

import { PriceRangeSlider } from "./priceRangeSlider/priceRangeSlider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Checkbox1 } from "./checkbox/checkbox1";
import { Checkbox2 } from "./checkbox/checkbox2";
import { FilterAltOutlined } from "@mui/icons-material";

const theme = createTheme();

export const Sidebar2 = () => {
  return (
    <div className="sidebar2 border">
      <h2>Filter by Price</h2>
      <ThemeProvider theme={theme}>
        <PriceRangeSlider />
      </ThemeProvider>
      <div>
        <Checkbox1 />
        <Checkbox2 />
        <button className="filterBtn">
          <FilterAltOutlined /> Filter
        </button>
      </div>
    </div>
  );
};
