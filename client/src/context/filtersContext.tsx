import { FiltersState } from "types";
import { createContext } from "react";

interface FiltersContextType {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

export const FiltersContext = createContext<FiltersContextType | null>(null);
