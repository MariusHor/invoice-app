import { AuthContext } from "context";
import { ReactNode, useState } from "react";
import { Auth } from "types";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth | object>(() => {
    return { isLoggedIn: Cookies.get("isLoggedIn") === "true" };
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
