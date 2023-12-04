 import { useDispatch } from 'react-redux';
import { newTaskValue } from '../../assets/redux/tasksSlise';
import React from 'react'; 

const AddTask = ()=>{
  const dispatch = useDispatch() 
const handleInput = (value)=>{
  dispatch(newTaskValue(value))
}

   return(
    <input   data-testid="add-task" type="text" onChange ={(e)=>{handleInput(e.target.value)}}/>
  )
}

export default AddTask