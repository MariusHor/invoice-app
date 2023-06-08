import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { Spinner } from "components";
import { useAuth, usePersist } from "hooks";
import { getRefreshToken } from "api";
import { parseJwt } from "utils";

export const AuthGuard = () => {
  const location = useLocation();
  const { auth, setAuth } = useAuth();
  const { setPersist } = usePersist();

  const decodedJwt = parseJwt(auth.accessToken);
  const isExpired = decodedJwt?.exp
    ? decodedJwt?.exp * 1000 < Date.now()
    : decodedJwt;

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        const {
          data: { accessToken },
        } = await getRefreshToken();

        setAuth((prev) => {
          return { ...prev, accessToken };
        });
      } catch (err) {
        setPersist(false);
      }
    };

    if (isExpired) {
      refreshAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (auth.isLoggedIn && isExpired) return <Spinner />;
  if (auth.isLoggedIn && !isExpired) return <Outlet />;
  return <Navigate to="/login" state={{ from: location }} replace />;
};
