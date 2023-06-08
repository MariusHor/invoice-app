import { ReactNode, useState, createContext } from "react";
import { FiltersState } from "types";

interface InvoiceFiltersContextType {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

export const InvoiceFiltersContext =
  createContext<InvoiceFiltersContextType | null>(null);

export const InvoiceFiltersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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
