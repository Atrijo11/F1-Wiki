import React from 'react'

function Marquee1({ imagesurls }) {
  return (
    <div className='bg-zinc-900 flex justify-between py-5 whitespace-nowrap overflow-hidden'>
      {imagesurls.map((url, index) => (
        <img key={index} src={url} className='w-full max-w-[10%] object-contain px-2' alt={`Image ${index}`} />
      ))}
    </div>
  )
}

export default Marquee1
