import { useState, createContext } from "react";
import { FiltersState, ProviderProps } from "types";

interface InvoiceFiltersContextType {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

export const InvoiceFiltersContext =
  createContext<InvoiceFiltersContextType | null>(null);

export const InvoiceFiltersProvider = ({
  children,
}: ProviderProps): React.JSX.Element => {
  const [filters, setFilters] = useState<FiltersState>({
    paid: true,
    pending: true,
    draft: true,
  });

  return (
    <InvoiceFiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </InvoiceFiltersContext.Provider>
  );
};
