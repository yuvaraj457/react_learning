import { Provider } from "react-redux";
import SearchUser from "./component.js/searchUser";
import {store} from './store'

function App() {
  return (
    <Provider store={store}>
      <SearchUser/>
    </Provider>
  );
}

export default App;