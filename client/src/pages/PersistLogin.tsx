import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth, useRefreshToken } from "hooks";
import { Spinner } from "components";

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { refresh } = useRefreshToken();
  const { auth } = useAuth();

  const hasAccessToken = "accessToken" in auth;

  useEffect(() => {
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

    !hasAccessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, [hasAccessToken, refresh]);

  if (isLoading) return <Spinner />;

  return <Outlet />;
};
