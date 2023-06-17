import { Checkbox, FormControlLabel } from "@mui/material";
import { FiltersState } from "types";
import { useInvoiceFilters } from "hooks";

import "./Filter.css";

interface FilterProps {
  id: string;
  name: keyof FiltersState;
  title: string;
}

export const Filter = ({ name, title }: FilterProps): React.JSX.Element => {
  const { filters, setFilters } = useInvoiceFilters();

  return (
    <li className="flex items-center gap-3 text-skin-base">
      <FormControlLabel
        control={
          <Checkbox
            className="checkbox"
            checked={filters[name]}
            onChange={() =>
              setFilters((prevFilters: FiltersState) => ({
                ...prevFilters,
                [name]: !prevFilters[name],
              }))
            }
          />
        }
        className="checkbox-label"
        label={title}
      />
    </li>
  );
};
