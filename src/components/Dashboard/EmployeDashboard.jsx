import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white font-bold text-2xl'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmployeDashboard