import React from 'react';
import Stripe from './Stripe';

function Stripes() {
    var data =[
        {name: "BAHRAIN" ,date: "2nd Mar", image: "https://img2.51gt3.com/rac/track/202303/d3984f0b93e24899af9cae74727db3cf.png?x-oss-process=style/_nowm"},
        {name: "SAUDI ARABIA" ,date: "9th Mar", image: "https://img2.51gt3.com/rac/track/202304/a791717c486b4cd48642b066d35a110c.png?x-oss-process=style/_nowm"},
        {name: "AUSTRALIA" ,date: "24th Mar", image: "https://img2.51gt3.com/rac/track/202303/1de549cd55884f8dabb6c54b22236046.png?x-oss-process=style/_nowm"},
        {name: "JAPAN" ,date: "7th Apr", image: "https://img2.51gt3.com/rac/track/aacbce6c41dd4e5496eea246fc5e7c6b.jpg?x-oss-process=style/_nowm"},
        {name: "CHINA" ,date: "21st Apr", image: "https://img2.51gt3.com/rac/track/8a961b9f3cc24e33965cfb9fea0194fa.jpg?x-oss-process=style/_nowm"},
        {name: "MIAMI" ,date: "5th May", image: "https://img2.51gt3.com/rac/track/202309/c7342d1e729f4e93a47fc2df2781a4b0.png?x-oss-process=style/_nowm"}
    ]
    return (
    <div className='bg-zinc-900 flex items-center'>
      {data.map((elem, index) => (
        <Stripe val={elem} key={index} />
      ))}
    </div>
  )
}

export default Stripes;
