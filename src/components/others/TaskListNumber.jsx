import React from 'react'

const TaskList = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='bg-red-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
      <div className='bg-green-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
      <div className='bg-yellow-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
      <div className='bg-orange-400 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
    </div>
  )
}

export default TaskList
