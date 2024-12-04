import React from 'react'
import './Marquee.css' // Import the CSS file for animations

function Marquee({ imagesurls }) {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt={`sponsor-${index}`} />
        ))}
        {imagesurls.map((url, index) => (
          <img key={`duplicate-${index}`} src={url} alt={`sponsor-duplicate-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Marquee
