import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import store, { AppDispatch } from "./redux/store";
import { checkVerificationStatus } from "./redux/thunks/authThunks";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkVerificationStatus());
  }, [dispatch]);

  return (
    <Provider {...{ store }}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
