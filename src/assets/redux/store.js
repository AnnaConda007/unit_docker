import { configureStore } from "@reduxjs/toolkit";
import tasksSlise from './tasksSlise';

const store = configureStore({
  reducer:{
    tasks : tasksSlise
  }
})

export default store