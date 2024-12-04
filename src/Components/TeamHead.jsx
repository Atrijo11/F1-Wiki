import React from 'react'
import Teams from '../assets/Teams.png'

function TeamHead() {
    return (
        <div className='bg-zinc-900 mt-20'>
            <div className='flex justify-center items-center px-5 py-5 h-full'>
                <img src={Teams} className='h-30' alt="Teams logo" />
            </div>
        </div>
    );
}

export default TeamHead