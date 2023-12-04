 
import './App.css'
import store from './assets/redux/store'
import { Provider } from "react-redux";
import AddTask from './components/add_task/AddTask';
import AddBtn from './components/add_task_btn/AddTaskBtn';
import TasksList from './components/tasks_list/TasksList';
function App() { 

  return (
   < Provider store={store}>
    <>
    <AddTask/>
    <AddBtn/>
    <TasksList/>
    </>
        </Provider>
  )
}

export default App
