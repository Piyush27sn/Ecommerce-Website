import React from "react";
import './sidebar.css'

import { Sidebar1 } from "./sidebar1";
import { Sidebar2 } from "./sidebar2";


export const Sidebar = ({value, onPriceChange}) => {
  return (
    <div className="sidebar">
      <Sidebar1 />
      <Sidebar2 value={value} onPriceChange={onPriceChange} />
    </div>
  );
};
