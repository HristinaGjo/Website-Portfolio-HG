import React from "react";


const Arrow = () => {
    return ( 
        <>
          <div>
      <svg width="125" height="100">
      <g transform="scale(0.7)"> 
        {/* Vertical line */}
        <line x1="50" y1="20" x2="50" y2="80" stroke="#19191b" strokeWidth="1" />
        {/* Horizontal line */}
        <line x1="50" y1="80" x2="150" y2="80" stroke="#19191b" strokeWidth="1" />
        {/* Arrowhead */}
        <polygon points="150,75 160,80 150,85" fill="#19191b" />
        </g>
      </svg>
    </div>
        </>
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