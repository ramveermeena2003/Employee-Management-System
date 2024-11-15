import React from 'react'
import Header from '../Auth/other/header'
import CreateTask from '../Auth/other/createTask'
import AllTasks from '../Auth/other/AllTasks'

const AdminDashboard = (props) => {
    return (
        <div className='p-10'>
            <Header changeUser = {props.changeUser} data = {props.data}/>
            <CreateTask/>
            <AllTasks/>
        </div>
    )
}

export default AdminDashboard
