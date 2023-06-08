import { useContext } from "react";

import { AuthContext } from "providers/AuthProvider";
import { InvoiceFiltersContext } from "providers/InvoiceFiltersProvider";
import { PersistContext } from "providers/PersistProvider";
import { ThemeContext } from "providers/ThemeProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw Error();

  return context;
};

export const useInvoiceFilters = () => {
  const invoiceFiltersContext = useContext(InvoiceFiltersContext);

  if (!invoiceFiltersContext) {
    throw new Error(
      "useInvoiceFilters has to be used within <InvoiceFiltersContext.Provider>"
    );
  }

  return invoiceFiltersContext;
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
    throw new Error("useTheme has to be used within <ThemeContext.Provider>");
  }

  return themeContext;
};
