import { Provider } from "react-redux";

import "./App.css";
import store from "./redux/store";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Provider {...{ store }}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
