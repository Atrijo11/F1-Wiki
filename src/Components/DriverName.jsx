import React from 'react';

function DriverName({ val }) {
  return (
    <div className={`relative w-full h-[23rem] py-20 bg-zinc-900 group transition-all duration-500 ease-in-out hover:bg-gradient-to-r ${val.hoverGradient}`}>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl text-white'>{val.Name}</h1>
        <div className='dets w-1/3 text-white'>
          <p className='mb-4 text-xl'>Pole Positions: {val.pole}</p>
          <p className='mb-4 text-xl'>Podiums: {val.podium}</p>
          <p className='mb-4 text-xl'>Wins: {val.win}</p>
        </div>
      </div>

      {/* Hover Image */}
      <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
        <img src={val.image} alt={val.Name} className='max-h-40' />
      </div>
    </div>
  );
}

export default DriverName;
