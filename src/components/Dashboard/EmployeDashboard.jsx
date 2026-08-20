import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white font-bold text-2xl'>
        <Header data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeDashboard