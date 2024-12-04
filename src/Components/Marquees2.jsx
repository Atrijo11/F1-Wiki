import React from 'react'
import Marquee2 from './Marquee2';
function Marquees2() {
    var images=[[
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/fom-website/2020/sponsors/Amex",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/Workday",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/BBS",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/TATA",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/fom-website/2020/sponsors/aggreko",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/188",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/puma",
        "https://media.formula1.com/image/upload/f_auto,c_limit,w_135,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/mcdonalds"
    ]];
  return (
    <div className='bg-zinc-900'>
      <div className='py-10'>
        {images.map((item, index) => (
          <Marquee2 key={index} imagesurls={item} />
        ))}
        
      </div>
    </div>
  )
}

export default Marquees2