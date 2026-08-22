import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white font-bold text-2xl'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeDashboard