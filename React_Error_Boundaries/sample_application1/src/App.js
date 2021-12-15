import Counter from "./component.js/counter";
import ErrorBoundary from "./component.js/errorBoundary";

function App() {
  return (
    <>
   <ErrorBoundary>
     <Counter/>
   </ErrorBoundary>
    </>
  );
}

export default App;