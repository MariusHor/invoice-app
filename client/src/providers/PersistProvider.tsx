import { ReactNode, Dispatch, SetStateAction, createContext } from "react";
import { useLocalStorage } from "hooks";
import { KEY_PERSIST, PERSIST_FALSE } from "utils/constants";

export interface PersistContextInterface {
  persist: boolean;
  setPersist: Dispatch<SetStateAction<boolean>>;
}

export const PersistContext = createContext<PersistContextInterface | null>(
  null
);

export const PersistProvider = ({ children }: { children: ReactNode }) => {
  const [persist, setPersist] = useLocalStorage(KEY_PERSIST, PERSIST_FALSE);

  return (
    <PersistContext.Provider value={{ persist, setPersist }}>
      {children}
    </PersistContext.Provider>
  );
};
