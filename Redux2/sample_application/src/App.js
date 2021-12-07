import PersonList from "./components/personList";

import {Provider} from 'react-redux'
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersonList/>
    </Provider>
  );
}

export default App;
