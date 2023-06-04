import { Dispatch, SetStateAction, createContext } from "react";
import { Auth } from "types";

export interface AuthContextInterface {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);
