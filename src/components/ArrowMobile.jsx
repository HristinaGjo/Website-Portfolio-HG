import React from "react";

const Arrow = () => {
  return (
    <div>
      <svg width="90" height="80">
        {/* Vertical line */}
        <line x1="50" y1="20" x2="50" y2="40" stroke="#6a6a6a" strokeWidth="1" />
        {/* Shorter horizontal line */}
        <line x1="50" y1="40" x2="70" y2="40" stroke="#6a6a6a" strokeWidth="1" />
        {/* Arrowhead */}
        <polygon points="70,35 80,40 70,45" fill="#6a6a6a" />
      </svg>
    </div>
  );
}

export default Arrow;

