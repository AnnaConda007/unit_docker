import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import AddTask from '../add_task/AddTask';
import store from '../../assets/redux/store';

describe("AddTask_test", () => {
  let addTaskInput
  beforeEach(() => { 
    render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );
    addTaskInput = screen.getByTestId("add-task");
  });

  test("default value", () => {
    expect(addTaskInput.value).toBe("");
  });

  test("update state", () => {
    fireEvent.change(addTaskInput, { target: { value: "текст задачи" } });
    const taskValue = store.getState().tasks.newTaskValue;
    expect(taskValue).toBe("текст задачи");
  });
});
