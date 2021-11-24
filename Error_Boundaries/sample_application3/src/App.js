import {ErrorBoundary, Counter }from "./components/errorBoundary";

function App() {
  return (
    <div >
       <ErrorBoundary>
          <p>Counter </p>
          <Counter />
        </ErrorBoundary>
        <ErrorBoundary>
          <p>counter </p>
          <Counter />
        </ErrorBoundary>
    </div>
  );
}

export default App;
