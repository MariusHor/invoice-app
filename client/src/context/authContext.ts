import { Dispatch, SetStateAction, createContext } from "react";
import { Auth } from "types";

export interface AuthContextInterface {
  auth: Auth | object;
  setAuth: Dispatch<SetStateAction<Auth | object>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);
