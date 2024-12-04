import React from 'react'

function Button() {
  return (
    <a href="https://www.formula1.com/en/results/2024/drivers" target="_blank" rel="noopener noreferrer">
  <div className='min-w-50 px-4 py-2 bg-zinc-900 text-black rounded-full flex items-center justify-center border border-red-600 text-white'>
    <span className='text-sm font-semibold text-white'>Current Standings</span>
  </div>
</a>
  )
}

export default Button