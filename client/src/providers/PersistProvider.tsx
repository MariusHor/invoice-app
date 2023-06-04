import { ReactNode } from "react";
import { PersistContext } from "context";
import { useLocalStorage } from "hooks";

export const PersistProvider = ({ children }: { children: ReactNode }) => {
  const [persist, setPersist] = useLocalStorage("persist", false);

  return (
    <PersistContext.Provider value={{ persist, setPersist }}>
      {children}
    </PersistContext.Provider>
  );
};
