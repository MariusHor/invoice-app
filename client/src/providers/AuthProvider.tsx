import {
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { Auth } from "types";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextInterface {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
