import { useContext } from "react";

import { AuthContext } from "providers/AuthProvider";
import { FiltersContext } from "providers/FiltersProvider";
import { PersistContext } from "providers/PersistProvider";
import { ThemeContext } from "providers/ThemeProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw Error();

  return context;
};

export const useFilters = () => {
  const filtersContext = useContext(FiltersContext);

  if (!filtersContext) {
    throw new Error(
      "useFilters has to be used within <FiltersContext.Provider>"
    );
  }

  return filtersContext;
};

export const usePersist = () => {
  const persistContext = useContext(PersistContext);

  if (!persistContext) {
    throw new Error(
      "usePersist has to be used within <PersistContext.Provider>"
    );
  }

  return persistContext;
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      "useFilters has to be used within <FiltersContext.Provider>"
    );
  }

  return themeContext;
};
