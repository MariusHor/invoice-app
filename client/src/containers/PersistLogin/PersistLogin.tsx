import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import { Spinner } from "components";
import { useAuth, usePersist, useRefreshToken } from "hooks";
import { PERSIST_TRUE } from "utils/constants";

export const PersistLogin = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();
  const { persist, setPersist } = usePersist();
  const refreshAccessToken = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const refreshAuth = async () => {
      try {
        await refreshAccessToken();
      } catch (err) {
        setPersist(PERSIST_TRUE);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    persist && !auth.isLoggedIn ? refreshAuth() : setIsLoading(false);
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!persist ? <Outlet /> : isLoading ? <Spinner /> : <Outlet />}</>;
};
