import React from 'react'
import Stripe3 from './Stripe3'

function Stripes3() {
    var data =[
        {name: "USA" ,date: "20th Oct",image:"https://img2.51gt3.com/rac/track/202303/d093da62dab34f54b494979cce5a7a1c.png?x-oss-process=style/_nowm"},
        {name: "MEXICO" ,date: "27th Oct",image:"https://img2.51gt3.com/rac/track/202303/c9098eab7c3d4ce7b4bdaf1dbd9845af.png?x-oss-process=style/_nowm"},
        {name: "BRAZIL" ,date: "3rd Nov",image:"https://img2.51gt3.com/rac/track/202304/c0bcb433231b430d8586c98f252ee4fd.png?x-oss-process=style/_nowm"},
        {name: "LAS VEGAS" ,date: "23rd Nov",image:"https://img2.51gt3.com/rac/track/202408/d5a00fba79924029b03c33fde14074c8.jpg?x-oss-process=style/_nowm"},
        {name: "QATAR" ,date: "1st Dec",image:"https://img2.51gt3.com/rac/track/202304/09453dfd832a4c4288021df1595cae63.png?x-oss-process=style/_nowm"},
        {name: "ABU DHABI" ,date: "8th Dec",image:"https://img2.51gt3.com/rac/track/202303/0dc5fd65ccd14cf8867584641f5649ed.png"},
    ]
    return (
    <div className='bg-zinc-900 flex items-center'>
      {data.map((elem,index) => (
        <Stripe3 vals={elem}/>
      ))}
    </div>
  )
}

export default Stripes3