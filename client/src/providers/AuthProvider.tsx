import { AuthContext } from "context";
import { ReactNode, useEffect, useState } from "react";
import { Auth } from "types";
import { getRefreshToken } from "api";
import { usePersist } from "hooks";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { persist } = usePersist();

  // also check if valid refreshToken
  const [auth, setAuth] = useState<Auth>(() => {
    return { isLoggedIn: persist };
  });

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        if (auth.isLoggedIn) {
          const {
            data: { username, accessToken },
          } = await getRefreshToken();

          setAuth((prev) => {
            return { ...prev, accessToken, username };
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    refreshAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
