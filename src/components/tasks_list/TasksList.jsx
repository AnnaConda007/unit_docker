import { useSelector } from 'react-redux'
import React from 'react'
const TasksList = ()=>{
  const tasksValue = useSelector(state=>state.tasks.tasks)

  return(
    <ul data-testid="tasksList">  
    {
      tasksValue.map((task, index) => (  
        <li key={index}>  
          {task}  
        </li>
      ))
    }
  </ul>
  )
}

export default TasksList