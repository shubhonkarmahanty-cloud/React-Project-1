import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl '>
        <div className='flex justify-between items-center '>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.categories}</h3>
          <h4 className='text-base'>{data.taskdate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.tasktitle}</h2>
        <p className='text-sm mt-2'>
          {data.taskdescription}
        </p>
         <div className='mt-10'>
            <button className='bg-green-400 py-1 px-2 text-sm'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
