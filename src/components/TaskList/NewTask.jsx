import React from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

const NewTask = (props) => {
  // const handleAccept = (e) => {
  //   const employees = getLocalStorage('employees').employees;
  //   employees.forEach(elem => {
  //     if (elem.id == props.employee_data.id) {
  //       elem.tasks.forEach(task => {
  //         if (e.target.value == task.taskTitle) {
  //           task.newTask = false;
  //           task.active = true;
  //         }
  //       })
  //       elem.taskCounts.newTask = elem.taskCounts.newTask - 1;
  //       elem.taskCounts.active = elem.taskCounts.active + 1;
  //     }

  //   });

  //   localStorage.setItem('employees', JSON.stringify(employees));
  //   // window.location.reload();

  // }

  return (
    <div className='flex-shrink-0 bg-red-400 w-[300px] h-[300px] rounded-xl p-5'>
      <h1 className='text-[12px] flex bg-gray-500 justify-center rounded-sm mb-1 font-medium text-emerald-200'>New task</h1>
      <div className='flex justify-between items-center text-sm'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>{props.data.taskCategory}</h3>
        <h4>{props.data.taskDate}</h4>
      </div>

      <h2 className=' font-semibold text-xl'>{props.data.taskTitle}</h2>
      <p className='text-sm mt-2'>{props.data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button  className='bg-green-500 py-1 px-2 text-sm rounded-lg hover:bg-green-700'>Accpet</button>
        <button  className='bg-green-500 py-1 px-2 text-sm rounded-lg hover:bg-green-700'>Reject</button>

      </div>
    </div>
  )
}

export default NewTask
