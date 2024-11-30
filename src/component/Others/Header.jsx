import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <
        span className='font-semibold'><br />Sourav !</span>
      </h1 >

      <button className='bg-red-600 text-lg font-medium px-5 py-2 rounded-sm '>Log Out</button>
    </div >
  )
}

export default Header