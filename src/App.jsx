import { Provider } from "react-redux";
import "./App.css";
import Mainpage from "./pages/Mainpage";
import store from "./app/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Mainpage />
      </Provider>
    </>
  );
};

export default App;
