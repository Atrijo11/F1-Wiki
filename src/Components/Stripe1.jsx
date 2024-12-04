import React, { useState } from 'react';

function Stripe1({ vals }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='w-[16.66%] px-4 py-3 border-t-2 border-b-2 border-r-2 border-zinc-500 flex justify-between items-center relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{vals.name}</span>
      <span className='font-bold text-red-600'>{vals.date}</span>

      {isHovered && (
        <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 w-48">
          <img 
            src={vals.image} 
            alt={vals.name} 
            className="w-full h-auto object-cover border-2 border-zinc-500 shadow-lg"
          />
        </div>
      )}
    </div>
  )
}

export default Stripe1;
