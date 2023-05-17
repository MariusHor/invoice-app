import { FiltersContext } from "context";
import { useContext } from "react";

export const useFilters = () => {
  const filtersContext = useContext(FiltersContext);

  if (!filtersContext) {
    throw new Error(
      "useFilters has to be used within <FiltersContext.Provider>"
    );
  }

  return filtersContext;
};
