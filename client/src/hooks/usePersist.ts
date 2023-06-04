import { useContext } from "react";
import { PersistContext } from "context";

export const usePersist = () => {
  const persistContext = useContext(PersistContext);

  if (!persistContext) {
    throw new Error(
      "usePersist has to be used within <PersistContext.Provider>"
    );
  }

  return persistContext;
};
