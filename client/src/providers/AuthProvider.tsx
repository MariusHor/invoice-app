import { AuthContext } from "context";
import { ReactNode, useState } from "react";
import { AuthContextInterface } from "types";

export interface Auth {
  username: string;
  password: string;
  accessToken: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthContextInterface | object>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
