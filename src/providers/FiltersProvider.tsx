import { FiltersState } from "types";
import { ReactNode, useState } from "react";
import { FiltersContext } from "context/filtersContext";

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
