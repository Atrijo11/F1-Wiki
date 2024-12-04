import React from 'react'
import Drivers from '../assets/Drivers.png'

function DriverHead() {
  return (
    <div className='bg-zinc-900'>
            <div className='flex justify-center items-center px-5 py-5 h-full'>
                <img src={Drivers} className='h-30' alt="Teams logo" />
            </div>
        </div>
  )
}

export default DriverHead