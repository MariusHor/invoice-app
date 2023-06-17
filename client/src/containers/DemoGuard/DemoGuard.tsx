import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks";

export const DemoGuard = (): React.JSX.Element => {
  const { auth } = useAuth();

  return auth.isLoggedIn ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
