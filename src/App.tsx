import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import { AppDispatch } from "./redux/store";
import { checkVerificationStatus } from "./redux/thunks/authThunks";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkVerificationStatus());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
