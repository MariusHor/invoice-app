import { useState, createContext } from "react";

import { Auth, AuthContextInterface, AuthProviderProps } from "types";

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
