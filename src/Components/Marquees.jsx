import React from 'react'
import Marquee from './Marquee'
function Marquees() {
  var images = [[
    "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/rolex","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/pirelli","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/aramco","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/Heineken%20-%20Outlined","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/dhl","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/qatar","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL","https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/salesforce"
  ]];
  return (
    <div className='bg-zinc-900'>
      <div className='py-10'>
        {images.map((item, index) => (
          <Marquee key={index} imagesurls={item} />
        ))}
      </div>
    </div>
  )
}

export default Marquees