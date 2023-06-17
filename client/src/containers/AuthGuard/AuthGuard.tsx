import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { Spinner } from "components";
import {
  useAuth,
  useCheckTokenExpiration,
  usePersist,
  useRefreshToken,
} from "hooks";
import { PERSIST_FALSE } from "utils/constants";

export const AuthGuard = (): React.JSX.Element => {
  const location = useLocation();
  const { auth } = useAuth();
  const { setPersist } = usePersist();
  const refreshAccessToken = useRefreshToken();
  const isExpired = useCheckTokenExpiration(auth.accessToken);

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        await refreshAccessToken();
      } catch (err) {
        setPersist(PERSIST_FALSE);
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
