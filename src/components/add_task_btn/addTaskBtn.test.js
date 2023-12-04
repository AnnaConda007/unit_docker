import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';  
import store from '../../assets/redux/store';
import AddTask from '../add_task/AddTask';  
import AddBtn from './AddTaskBtn';   



describe("addBtn",()=>{
  let addBtn 
  beforeEach(()=>{
    render(
      <Provider store={store}>
      <AddBtn/>
      <AddTask/>
    </Provider>
      )
    addBtn = screen.getByTestId("add-btn") 
  })
  test("in document",()=>{ 
  expect(addBtn).toBeTruthy()
  })
  test("push tasks arr",async ()=>{
      const addTaskInput = screen.getByTestId("add-task");
      fireEvent.change(addTaskInput, { target: { value: "текст задачи" } });
      fireEvent.click(addBtn) 
        const tasksArr = store.getState().tasks.tasks;
        expect(tasksArr).toContain("текст задачи");
     
})
})