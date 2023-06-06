import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks";
import { getRefreshToken } from "api";

export const AuthGuard = () => {
  const location = useLocation();
  const { auth } = useAuth();

  console.log("AUTH-GUARD");

  if (auth.accessToken) {
    return <Outlet />;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};
