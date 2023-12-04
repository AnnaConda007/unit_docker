import React from 'react';
 import { render, screen } from '@testing-library/react';  
import store from '../../assets/redux/store'; 
import TasksList from './TasksList';
import { Provider } from 'react-redux';
import { addNewTask } from '../../assets/redux/tasksSlise';
import '@testing-library/jest-dom';

describe("tasksList",()=>{
test("push tasks",()=>{
  store.dispatch(addNewTask("Test Task 1"));
  render(
    <Provider store={store}> 
<TasksList/>
    </Provider>
  ) 
  const tasksList = screen.getByTestId("tasksList") 
  expect(tasksList).not.toBeEmptyDOMElement();
  expect(screen.getByText("Test Task 1")).toBeInTheDocument();


})
})