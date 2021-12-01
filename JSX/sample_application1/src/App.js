import { useState } from "react";
import MediaContainer from "./components/mediaContainer";

function App() {
  const [componentName, setComponentName] = useState(false)

  const style = {
    padding : "12px 18px",
    marginRight : "8px",
    backgroundColor : "blue",
    color : "white",
    border : 0,
    borderRadius : "8px",
    cursor : "pointer"
  }
  return (
    <div>
     <button onClick={() => setComponentName('photo')} style={style}>Photo</button>
     <button onClick={() => setComponentName('video')} style={style}>Video</button>
     <button onClick={() => setComponentName('task')} style={style}>Task</button>
     {componentName && <MediaContainer componentName={componentName}/>}
    </div>
  );
}

export default App;
