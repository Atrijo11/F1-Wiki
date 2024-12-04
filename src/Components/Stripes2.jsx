import React from 'react'
import Stripe2 from './Stripe2'
import { image } from 'framer-motion/client'

function Stripes2() {
    var data =[
        {name: "HUNGARY" ,date: "21st July",image:"https://img2.51gt3.com/rac/track/202309/f24f80e559c54c12ba9a7bd87e28810b.png?x-oss-process=style/_nowm"},
        {name: "BELGIUM" ,date: "28th July",image:"https://img2.51gt3.com/rac/track/202304/1aebcbf68ab14bce81924c06009fbe62.png?x-oss-process=style/_nowm"},
        {name: "NETHERLANDS" ,date: "25th Aug",image:"https://img2.51gt3.com/rac/track/202304/f7d718f5f16f49038f69f21a3f3d972f.png?x-oss-process=style/_nowm"},
        {name: "ITALY" ,date: "1st Sept",image:"https://img2.51gt3.com/rac/track/202304/73988af861d14f0bb3b39149aefaff65.png?x-oss-process=style/_nowm"},
        {name: "AZERBAIJAN" ,date: "15th Sept",image:"https://img2.51gt3.com/rac/track/202303/e92a3676600d4c718a994a06ae7d8c4d.png?x-oss-process=style/_nowm"},
        {name: "SINGAPORE" ,date: "22nd Sept",image:"https://img2.51gt3.com/rac/track/202304/c7997eea68a34e63bf5457a6528554f0.jpg?x-oss-process=style/_nowm"},
    ]
    return (
    <div className='bg-zinc-900 flex items-center'>
      {data.map((elem,index) => (
        <Stripe2 vals={elem}/>
      ))}
    </div>
  )
}

export default Stripes2