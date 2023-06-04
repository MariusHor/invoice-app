import { Dispatch, SetStateAction, createContext } from "react";

export interface PersistContextInterface {
  persist: boolean;
  setPersist: Dispatch<SetStateAction<boolean>>;
}

export const PersistContext = createContext<PersistContextInterface | null>(
  null
);
