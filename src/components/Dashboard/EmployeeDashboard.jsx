import React from 'react'
import Header from '../Auth/other/header'
import TaskListNumber from '../Auth/other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10'>
      <Header changeUser = {props.changeUser} data ={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard