import { useState, React, useEffect } from 'react'
import { getLocalStorage } from '../../Utils/LocalStorage';

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [taskCategory, setTaskCategory] = useState('');

    const [addNewTask, setAddNewTask] = useState(null);

    useEffect(() => {
        if (addNewTask) {
            const employees = getLocalStorage('employees').employees;
            employees.forEach(e => {
                if (e.firstName == asignTo) {
                    e.taskCounts.newTask =  e.taskCounts.newTask + 1;
                    e.tasks.push(addNewTask);
                }

            });
            localStorage.setItem('employees',JSON.stringify(employees));
            setAsignTo('')
            setAddNewTask('')
            window.location.reload();
        }
    }, [addNewTask, asignTo]);


    const SubmitHandler = (e) => {
        e.preventDefault();

        setAddNewTask({ taskTitle, taskDescription, taskDate, taskCategory, active: false, newTask: true, completed: false, failed: false })

        setTaskTitle('');
        setTaskDate('');
        // setAsignTo('');
        setTaskCategory('');
        setTaskDescription('');


    }

    return (
        <div className='mt-5 bg-[#1C1C1C] rounded-xl p-5'>
            <div>
                <form onSubmit={(e) => SubmitHandler(e)} className='flex justify-between gap-10'>
                    <div className='w-1/2'>
                        <div>
                            <h1 className='text-gray-400 mb-1'>Task Title</h1>
                            <input required value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1 mb-5' type="text" placeholder='Make a UI Design' />
                        </div>
                        <div>
                            <h1 className='text-gray-400 mb-1'>Date</h1>
                            <input required value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1 mb-5' type="date" />
                        </div>
                        <div>
                            <h1 className='text-gray-400 mb-1'>Assign To</h1>
                            <input required value={asignTo} onChange={(e) => { setAsignTo(e.target.value) }} className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1 mb-5' type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h1 className='text-gray-400 mb-1'>Category</h1>
                            <input required value={taskCategory} onChange={(e) => { setTaskCategory(e.target.value) }} className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1' type="text" placeholder='Design, development, etc...' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div>
                            <h1 className='text-gray-400 mb-1'>Description</h1>
                            <textarea required value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} className='w-full rounded-lg bg-transparent border-emerald-300 border px-3 py-1 h-[200px] overflow-auto no_scrollbar' name="" id="" placeholder='Detailed description of task (Max 500 words)'></textarea>
                        </div>
                        <button className='bg-emerald-500 rounded-lg mt-2 flex justify-center items-center text-xl font-medium py-1.5 hover:bg-emerald-700 w-full' >Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
