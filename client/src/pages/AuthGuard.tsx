import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks";

export const AuthGuard = () => {
  const location = useLocation();
  const { auth } = useAuth();

  if (auth.accessToken) {
    return <Outlet />;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};
