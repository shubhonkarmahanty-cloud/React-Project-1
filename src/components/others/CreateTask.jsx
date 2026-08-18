import React from 'react'

const CreateTask = () => {
  return (
     <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        <form className='flex items-start flex-wrap w-full justify-between'>
          <div className='w-1/2'>
             <div>
              <h3 className='text-sm py-1 px-2 w-4/5 rounded bg-transparent'>Task Title</h3>
              <input type="text" placeholder='Make a ui Design' />
            </div>
             <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
             <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent boredr-[1px] border-gray-400 mb-4' type="date" />
           </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent boredr-[1px] border-gray-400 mb-4' type="text" placeholder='EmployeName' />
            </div>
           <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
             <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent boredr-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev,etc' />
           </div>
          </div>
            <div className='w-1/2 flex flex-col my-10 items-start'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
              <textarea className='w-full h-44 text-sm py-2 px-4 rounded bg-transparent border-[1px] border-gray-400' name="" cols="30" rows= "10" id=""></textarea>
              <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4'>Create Task</button>
            </div>
          
        </form>
      </div>
  )
}

export default CreateTask
