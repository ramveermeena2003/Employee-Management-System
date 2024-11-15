import React from 'react'

const TaskListNumber = ({ data }) => {
    return (
        <div className='mt-10 gap-3 flex flex-wrap justify-between'>
            <div className='bg-red-500 p-5 rounded-xl w-[45%]'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='bg-blue-500 p-5 rounded-xl w-[45%]'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
                <h3 className='text-2xl font-medium'>Completed Task</h3>
            </div>
            <div className='bg-green-500 p-5 rounded-xl w-[45%]'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
                <h3 className='text-2xl font-medium'>Accepted Task</h3>
            </div>
            <div className='bg-yellow-500 p-5 rounded-xl w-[45%]'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
                <h3 className='text-2xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
