import { AuthContext } from "context";
import { ReactNode, useEffect, useState } from "react";
import { Auth } from "types";
import Cookies from "js-cookie";
import { getRefreshToken } from "api";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>(() => {
    return { isLoggedIn: Cookies.get("isLoggedIn") === "true" };
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
