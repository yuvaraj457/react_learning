import PersonList from "./components/personList";

import {Provider} from 'react-redux'
import { store } from "./store";
import PersonInfo from "./components/personInfo";

function App() {
  return (
    <Provider store={store}>
      <PersonList/>
      <PersonInfo/>
    </Provider>
  );
}

export default App;
