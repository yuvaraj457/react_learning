import { useState } from "react";
import Modal from "./component.js/modal";
import PortalModal from "./component.js/portalModal";

function App() {
  const [show, setShow] = useState(false)
  const [showPortal, setShowPortal] = useState(false)
  return (
    <>
    <button onClick={() => setShow(true)}>open Modal</button>
    <button onClick={() => setShowPortal(true)}>open portal modal</button>
    <Modal 
      message = "Hello World"
      isOpen = {show}
      close = {() => setShow(false)} 
    />
    <PortalModal
      message= "Hello World"
      isOpen = {showPortal}
      close={() => setShowPortal(false)}
    />
    </>
  );
}

export default App;