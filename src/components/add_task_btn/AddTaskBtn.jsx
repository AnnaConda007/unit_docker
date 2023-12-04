import { addNewTask } from '../../assets/redux/tasksSlise';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';

const AddBtn = ()=>{
const dispatch =  useDispatch()
const newTasks = useSelector((state) => state.tasks.newTaskValue); 

const handleBtn = ()=>{
  dispatch(addNewTask(newTasks))
}

return(
  <button  data-testid="add-btn" onClick={handleBtn}>add</button>
)
}

export default AddBtn