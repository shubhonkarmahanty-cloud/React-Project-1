import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start flex-nowrap gap-5 py-5 mt-10'>
      {data.tasks.map(()=>{
        return <h1>hii</h1>
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FaildTask /> */}
    </div>
  )
}

export default TaskList
