import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const AuthGuard = () => {
  const { auth } = useAuth();
  const location = useLocation();

  const hasAccessToken = "accessToken" in auth;

  if (hasAccessToken) {
    return <Outlet />;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};
