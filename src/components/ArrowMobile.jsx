import React from "react";


const ArrowMobile = () => {
    return ( 
        <>
          <div>
          <svg width="80" height="50">
            <g transform="scale(0.7)">
          {/* Vertical line */}
          <line x1="20" y1="10" x2="20" y2="40" stroke="#19191b" strokeWidth="1" />
          {/* Horizontal line */}
          <line x1="20" y1="40" x2="70" y2="40" stroke="#19191b" strokeWidth="1" />
          {/* Arrowhead */}
          <polygon points="70,35 80,40 70,45" fill="#19191b" />
          </g>
          </svg>
    </div>
        </>
     );
}
 
export default ArrowMobile;





