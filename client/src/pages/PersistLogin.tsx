import { Outlet } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { useAuth, useLocalStorage, useRefreshToken } from "hooks";

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { refresh } = useRefreshToken();
  const { auth } = useAuth();
  const [persist] = useLocalStorage("persist", true);

  const hasAccessToken = "accessToken" in auth;

  useLayoutEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !hasAccessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? null : <Outlet />}</>;
};
