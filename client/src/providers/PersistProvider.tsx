import { Dispatch, SetStateAction, createContext } from "react";
import { useLocalStorage } from "hooks";
import { KEY_PERSIST, PERSIST_FALSE } from "utils/constants";
import { ProviderProps } from "types";

export interface PersistContextInterface {
  persist: boolean;
  setPersist: Dispatch<SetStateAction<boolean>>;
}

export const PersistContext = createContext<PersistContextInterface | null>(
  null
);

export const PersistProvider = ({ children }: ProviderProps) => {
  const [persist, setPersist] = useLocalStorage(KEY_PERSIST, PERSIST_FALSE);

  return (
    <PersistContext.Provider value={{ persist, setPersist }}>
      {children}
    </PersistContext.Provider>
  );
};
