import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import { Spinner } from "components";
import { useAuth, usePersist } from "hooks";
import { getRefreshToken } from "api";

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, setAuth } = useAuth();
  const { persist, setPersist } = usePersist();

  useEffect(() => {
    let isMounted = true;
    const refreshAuth = async () => {
      try {
        const {
          data: { username, accessToken },
        } = await getRefreshToken();

        setAuth((prev) => {
          return { ...prev, accessToken, username, isLoggedIn: true };
        });
      } catch (err) {
        setPersist(false);
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

  return <>{isLoading ? <Spinner /> : <Outlet />}</>;
};
