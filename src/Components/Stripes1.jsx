import React from 'react'
import Stripe1 from './Stripe1'

function Stripes1() {
    var data =[
        {name: "EMILIA ROMAGNA" ,date: "19th May", image: "https://img2.51gt3.com/rac/track/202304/15ab044da2b542b587a5ddba4a9ce76e.png?x-oss-process=style/_nowm"},
        {name: "MONACO" ,date: "26th May", image:"https://img2.51gt3.com/rac/track/202304/adbd43e013004af186a50503a1c2b260.png?x-oss-process=style/_nowm"},
        {name: "CANADA" ,date: "9th June", image:"https://img2.51gt3.com/rac/track/202305/4234608427f245d09bc52617f732353f.png?x-oss-process=style/_nowm"},
        {name: "SPAIN" ,date: "23rd June", image:"https://img2.51gt3.com/rac/track/202303/35ad041fd64f44628adaec94b0769607.png?x-oss-process=style/_nowm"},
        {name: "AUSTRIA" ,date: "28th June", image:"https://img2.51gt3.com/rac/track/202304/10482227212b4ac3a557ce0197cb87a0.png?x-oss-process=style/_nowm"},
        {name: "UNITED KINGDOM" ,date: "7th July", image:"https://img2.51gt3.com/rac/track/202304/fed0c74be75347a490b23f65a87c1d0e.png?x-oss-process=style/_nowm"}
    ]
    return (
    <div className='bg-zinc-900 flex items-center'>
      {data.map((elem,index) => (
        <Stripe1 vals={elem}/>
      ))}
    </div>
  )
}

export default Stripes1