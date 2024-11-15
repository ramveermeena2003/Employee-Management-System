import React, { useContext } from 'react'
import AuthProvider, { AuthConext } from '../../context/AuthProvider'

const AllTasks = () => {
    const authData = useContext(AuthConext)

    return (
        <div className='bg-[#1C1C1C] mt-5 p-5 h-[30vh] rounded-xl'>
            <div className='flex justify-between bg-slate-950 rounded p-2'>
                <h1 className='w-1/5  font-medium'>Employee Name</h1>
                <h1 className='w-1/5 text-blue-800 font-medium'>New Task</h1>
                <h1 className='w-1/5 text-yellow-400 font-medium'>Active Task</h1>
                <h1 className='w-1/5 text-green-100 font-medium'>Completed</h1>
                <h1 className='w-1/5 text-red-700 font-medium'>Failed</h1>
            </div>
            <div className='mt-5 flex flex-col gap-2 h-[15vh] overflow-auto no_scrollbar'>
                {authData.employees.map((elem, idx) => {
                    return <div key={idx} className='flex justify-between bg-transparent border-emerald-300 border rounded p-2'>
                        <h1 className='w-1/5  font-medium'>{elem.firstName}</h1>
                        <h1 className='w-1/5 text-blue-800 font-medium'>{elem.taskCounts.newTask}</h1>
                        <h1 className='w-1/5 text-yellow-400 font-medium'>{elem.taskCounts.active}</h1>
                        <h1 className='w-1/5 text-green-100 font-medium'>{elem.taskCounts.completed}</h1>
                        <h1 className='w-1/5 text-red-700 font-medium'>{elem.taskCounts.failed}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTasks
