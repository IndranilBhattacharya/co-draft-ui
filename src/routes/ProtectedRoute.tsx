import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "../redux/store";

export default function ProtectedRoute() {
  const isDeviceVerified = useSelector<RootState>(
    (state) => state.auth.isVerified
  );

  if (!isDeviceVerified) return <Navigate to="/register" replace />;

  return <Outlet />;
}
