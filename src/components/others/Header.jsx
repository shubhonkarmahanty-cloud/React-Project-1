import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='font-semibold'>Hello <br /><span className='text-3xl'>{data.firstname}</span> </h1>
      <button className='bg-red-500 px-5 py-2 rounded-2xl'>Log Out</button>
    </div>
  )
}

export default Header