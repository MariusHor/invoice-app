import { FiltersState } from "types";
import { useInvoiceFilters } from "hooks";

import "./Filter.css";

interface FilterProps {
  id: string;
  name: keyof FiltersState;
  title: string;
}

export const Filter = ({ id, name, title }: FilterProps): React.JSX.Element => {
  const { filters, setFilters } = useInvoiceFilters();

  return (
    <li className="flex items-center gap-3 text-skin-base">
      <input
        className={`${filters[name] ? "checked" : ""}`}
        type="checkbox"
        id={id}
        name={name}
        onChange={() =>
          setFilters((prevFilters: FiltersState) => ({
            ...prevFilters,
            [name]: !prevFilters[name],
          }))
        }
        checked={filters[name]}
      />
      <label htmlFor={id}>{title}</label>
    </li>
  );
};
