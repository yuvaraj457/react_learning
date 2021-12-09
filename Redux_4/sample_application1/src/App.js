import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./Action/todoAction";
import AppContainer from "./components/appContainer";


function App() {
  const dispatch = useDispatch()

  const todos = useSelector(state => state.data)
  const completedTask = todos.filter((item) => item.completed)
  const incompletedTask = todos.filter((item) => !item.completed)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    dispatch(fetchTodos())
  },[])

  return (
    <div>
     <button onClick={() => setTasks(todos)}>All Tasks</button>
     <button onClick={() => setTasks(completedTask)}>Completed Task</button>
     <button onClick={() => setTasks(incompletedTask)}>InCompleted Tasks</button>
     {todos.length > 0 && <AppContainer tasks={tasks}/>}
    </div>
  );
}

export default App;
