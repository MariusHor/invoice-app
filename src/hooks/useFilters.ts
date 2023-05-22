import { useContext } from "react";
import { FiltersContext } from "context";

export const useFilters = () => {
  const filtersContext = useContext(FiltersContext);

  if (!filtersContext) {
    throw new Error(
      "useFilters has to be used within <FiltersContext.Provider>"
    );
  }

  return filtersContext;
};
