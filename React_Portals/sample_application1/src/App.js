import {  Profiler, useState } from "react";
import { PortalWrapper } from "./component.js/portalWrapper";

function App() {
  const [show, setShow] = useState(false)

  const portalStyle = {
    backgroundColor : 'rgba(0,0,0,0.5)',
    position : 'fixed',
    top : 0,
    left : 0,
    height: '100%',
    width: '100%',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
  }

  return (
    <div style={{height : '200px'}}>
      <h2>This is React Portal Sample Application</h2>
      <button onClick={() => setShow(true)}>Click Me</button>
      {show && <Profiler id='PortalWrapper' onRender={logs}><PortalWrapper><div style={portalStyle}> I am Here <button onClick={() => setShow(false)}>Hide</button> </div></PortalWrapper></Profiler>}
    </div>
  );
}

const logs = (id, phase, actualTime, baseTime, startTime, commitTime)=> {
  console.log(`${id}'s ${phase} phase:`)
  console.log(`Actual time: ${actualTime}`)
  console.log(`Base time: ${baseTime}`)
  console.log(`Start time: ${startTime}`)
  console.log(`Commit time: ${commitTime}`)
}

export default App;