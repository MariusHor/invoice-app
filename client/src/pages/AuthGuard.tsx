import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth, usePersist } from "hooks";
import { useEffect, useState } from "react";
import { Spinner } from "components";
import { getRefreshToken } from "api";
import { parseJwt } from "utils";

export const AuthGuard = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { auth, setAuth } = useAuth();
  const { setPersist } = usePersist();

  const decodedJwt = parseJwt(auth.accessToken);
  const isExpired = decodedJwt?.exp
    ? decodedJwt?.exp * 1000 < Date.now()
    : true;

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        const {
          data: { accessToken },
        } = await getRefreshToken();

        setIsAuthenticated(true);
        setAuth((prev) => {
          return { ...prev, accessToken };
        });
      } catch (err) {
        setPersist(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (!auth.accessToken) {
      setIsLoading(false);
    }

    if (isExpired && auth.accessToken) {
      setIsAuthenticated(false);
      setIsLoading(true);
      refreshAuth();
    }

    if (!isExpired) {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (!isExpired) return <Outlet />;
  if (isLoading || (isAuthenticated && isExpired)) return <Spinner />;
  return <Navigate to="/login" state={{ from: location }} replace />;
};
