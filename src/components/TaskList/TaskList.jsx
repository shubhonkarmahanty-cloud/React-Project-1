import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  // console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start flex-nowrap gap-5 py-5 mt-10'>
      {data.tasks.map((e,idx)=>{
        // console.log(e)
        if(e.active){
          return <AcceptTask key={idx} />
        }
        if(e.newTask){
          return <NewTask key={idx} />
        }
        if(e.completed){
          return <CompleteTask key={idx} />
        }
        if(e.failed){
          return <FaildTask key={idx} />
        }
      })}
    </div>
  )
}

export default TaskList
