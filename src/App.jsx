import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import DateHead from './Components/DateHead'
import Stripes from './Components/Stripes'
import Stripes1 from './Components/Stripes1'
import Stripes2 from './Components/Stripes2'
import Stripes3 from './Components/Stripes3' 
import TeamHead from './Components/TeamHead'
import TeamNames from './Components/TeamNames'
import DriverHead from './Components/DriverHead'
import DriverNames from './Components/DriverNames'
import Marquees from './Components/Marquees'
import Marquees1 from './Components/Marquees1'
import Marquees2 from './Components/Marquees2'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Work />
      <Marquees />
      <DateHead />
      <Stripes />
      <Stripes1 />
      <Stripes2 />
      <Stripes3 />
      <TeamHead />
      <TeamNames />
      <DriverHead />
      <DriverNames/>
      <Marquees1/>
      <Marquees2 />
      <Footer />
      </div>
  )
}

export default App