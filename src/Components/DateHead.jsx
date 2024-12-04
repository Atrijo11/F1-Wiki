import React from 'react'
import RaceDay from '../assets/Race-Day.png'

function DateHead() {
    return (
        <div className='bg-zinc-900'>
            <div className='flex justify-center items-center px-5 py-5 h-full'>
                <img src={RaceDay} className='h-50' alt="Teams logo" />
            </div>
        </div>
    );
}

export default DateHead