import { getRefreshToken } from "api";
import { Spinner } from "components";
import { AuthContext } from "context";
import { ReactNode, useEffect, useState } from "react";
import { Auth } from "types";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState<Auth | object>({});

  useEffect(() => {
    const isAuth = async () => {
      try {
        const { data } = await getRefreshToken();
        setAuth((prev) => ({ ...prev, accessToken: data.accessToken }));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    isAuth();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
