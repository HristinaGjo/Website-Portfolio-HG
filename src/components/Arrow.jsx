import React from "react";

const Arrow = () => {
  return (
    <div>
      <svg width="100" height="100">
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









/* const Arrow = () => {
    return ( 
        <>
          <div>
      <svg width="200" height="100">
        <line x1="50" y1="20" x2="50" y2="80" stroke="black" strokeWidth="2" />

        <line x1="50" y1="80" x2="150" y2="80" stroke="black" strokeWidth="2" />
  
        <polygon points="150,75 160,80 150,85" fill="black" />
      </svg>
    </div>
        </>
     );
}
 
export default Arrow;*/