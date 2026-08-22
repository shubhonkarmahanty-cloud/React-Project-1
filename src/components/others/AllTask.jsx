import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData= useContext(AuthContext)
    // console.log(authData.employees)

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded  h-63'>
        <div className='bg-green-400 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
       <div className='h-[85%] overflow-auto scrool-bar'>
         {authData.employees.map((e,idx)=>{
        return <div key={idx} className='bg-red-400 py-2 mb-2 px-4 flex justify-between  rounded'>
            <h2 className='text-lg font-medium w-1/5'>{e.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5'>{e.taskNumber.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5'>{e.taskNumber.active}</h5>
            <h5 className='text-lg font-medium w-1/5'>{e.taskNumber.completedTask}</h5>
            <h5 className='text-lg font-medium w-1/5'>{e.taskNumber.failed}</h5>
        </div>
    })}
       </div>
      
    </div>
  )
}

export default AllTask
