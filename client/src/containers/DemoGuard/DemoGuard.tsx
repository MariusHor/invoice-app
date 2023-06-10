import { useAuth } from "hooks";
import { Navigate, Outlet } from "react-router-dom";

export const DemoGuard = () => {
  const { auth } = useAuth();

  return auth.isLoggedIn ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
