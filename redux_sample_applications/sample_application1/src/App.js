import CounterDisplay from "./components/counterDisplay";
import store from './components/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CounterDisplay/>
   </Provider>

  );
}

export default App;
