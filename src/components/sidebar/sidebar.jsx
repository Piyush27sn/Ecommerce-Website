import React from "react";
import './sidebar.css'

import { Sidebar1 } from "./sidebar1";
import { Sidebar2 } from "./sidebar2";


export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sidebar1 />
      <Sidebar2 />
    </div>
  );
};
