import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/routes";
import {store} from './Store'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
