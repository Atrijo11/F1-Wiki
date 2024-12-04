import React from 'react'
import Marquee1 from './Marquee1'

function Marquees1() {
    var images=[[
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/fom-website/2020/sponsors/las%20vegas",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/fom-website/2020/sponsors/Paramount+",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/msc",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/lenovo",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/crypto.com",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/ferrari-trento",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/liqui-moly",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/fom-website/2020/sponsors/globant",
    ]];
  return (
    <div className='bg-zinc-900'>
      <div className='py-10'>
        {images.map((item, index) => (
          <Marquee1 key={index} imagesurls={item} />
        ))}
        
      </div>
    </div>
  )
}

export default Marquees1