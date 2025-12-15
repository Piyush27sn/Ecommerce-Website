import React, { useState } from "react";
import { CompareArrowsOutlined } from "@mui/icons-material";  
import { Badge } from "@mui/material";
import "./cart.css";

export const CompareIt = () => {
  const [compareCount, setCompareCount] = useState(0);

  const addItemToCompare = () => {
    setCompareCount((prev) => prev + 1);
  };

  return (
    <div>
      <Badge
        badgeContent={compareCount}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#ff6600",
            color: "#fff",
            fontSize: "0.75rem",
          },
        }}
      >
        <CompareArrowsOutlined className="cartIcon" />
      </Badge>

      <button className="cartBtn" onClick={addItemToCompare}>
        Compare
      </button>
    </div>
  );
};
