import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  tasks :[],
  newTaskValue: '' 
}
const tasksSlise = createSlice({
  name:"tasks",
  initialState,
  reducers:{
    addNewTask:(state, action)=>{
state.tasks.push(action.payload)
    },
    newTaskValue:(state, action)=>{
      state.newTaskValue = action.payload 
    }
  }
})

export const {addNewTask, newTaskValue} = tasksSlise.actions
export default tasksSlise.reducer