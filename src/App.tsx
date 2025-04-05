import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import { AppDispatch } from "./redux/store";
import { ThemeProvider } from "./provider/ThemeProvider";
import { checkVerificationStatus } from "./redux/thunks/authThunks";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkVerificationStatus());
  }, [dispatch]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
