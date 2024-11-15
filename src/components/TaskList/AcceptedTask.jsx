import React from 'react'

const AcceptedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 bg-red-400 w-[300px] h-[300px] rounded-xl p-5'>
      <h1 className='text-[12px] flex bg-gray-500 justify-center rounded-sm mb-1 font-medium text-emerald-200'>Accepted task</h1>
      <div className='flex justify-between items-center text-sm'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>{data.taskCategory}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 font-semibold text-xl'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded-lg hover:bg-green-700'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded-lg hover:bg-red-700'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptedTask
