import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompletedTask from './CompletedTask'

const TaskList = ({data}) => {
    // console.log(data);
    return (
        <div className='no_scrollbar flex flex-nowrap overflow-x-auto gap-5 w-full h-[40%] mt-10'>
            {data.tasks.map((elem ,idx) => {
                if (elem.newTask) {
                    return <NewTask key={idx} employee_data = {data} data = {elem} />
                }
                else if (elem.active) {
                    return <AcceptedTask key={idx} data = {elem} />
                }
                else if (elem.completed) {
                    return <CompletedTask key={idx} data = {elem}/>
                }
                else if (elem.failed) {
                    return <FailedTask key={idx} data = {elem} />
                }
            })}
        </div>
    )
}

export default TaskList
