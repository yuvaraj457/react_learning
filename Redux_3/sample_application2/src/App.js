import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { todo } from "./Action/action";

function App() {
  const [text, setText] = useState('')

  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const text = e.target.value.trim()
    if (e.key === 'Enter' && text){
      dispatch(todo(text))
      setText('')
    }
  }
  return (
    <>
      <input
      type="text"
      placeholder="Add Todo"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    <ol>{todos.length>0 && todos.map((item, index) => <li>{item}</li>)}</ol>
    </>
  );
}

export default App;
