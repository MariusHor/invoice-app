import { ReactNode, Dispatch, SetStateAction, createContext } from "react";
import { useLocalStorage } from "hooks";

export interface PersistContextInterface {
  persist: boolean;
  setPersist: Dispatch<SetStateAction<boolean>>;
}

export const PersistContext = createContext<PersistContextInterface | null>(
  null
);

export const PersistProvider = ({ children }: { children: ReactNode }) => {
  const [persist, setPersist] = useLocalStorage("persist", false);

  return (
    <PersistContext.Provider value={{ persist, setPersist }}>
      {children}
    </PersistContext.Provider>
  );
};
