import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../Action/todoAction";
import TodosContainer from "./todosContainer";



export const Todos = () => {
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
    <Link to='/'>Home</Link>
     <button onClick={() => setTasks(todos)}>All Tasks</button>
     <button onClick={() => setTasks(completedTask)}>Completed Task</button>
     <button onClick={() => setTasks(incompletedTask)}>InCompleted Tasks</button>
     {todos.length > 0 && <TodosContainer tasks={tasks}/>}
    </div>
  );
}
