import { ReactNode, useState } from "react";
import { FiltersContext } from "context/filtersContext";
import { FiltersState } from "types";

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FiltersState>({
    paid: true,
    pending: true,
    draft: true,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
