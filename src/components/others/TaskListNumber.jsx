import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='bg-blue-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>
      <div className='bg-green-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.completedTask}</h2>
        <h2 className='text-xl font-medium'>Completed Task</h2>
      </div>
      <div className='bg-yellow-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
        <h2 className='text-xl font-medium'>Active Task</h2>
      </div>
      <div className='bg-red-500 px-9 py-6 rounded-xl w-[45%] '>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.failed}</h2>
        <h2 className='text-xl font-medium'>Failed Task</h2>
      </div>
    </div>
  )
}

export default TaskList
