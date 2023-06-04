import { Outlet } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { useAuth, useRefreshToken, usePersist } from "hooks";

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { refresh } = useRefreshToken();
  const { auth } = useAuth();
  const { persist } = usePersist();

  const hasAccessToken = auth.accessToken;

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

    console.log(auth, hasAccessToken);

    !hasAccessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(persist);

  return <>{isLoading ? null : <Outlet />}</>;
};
