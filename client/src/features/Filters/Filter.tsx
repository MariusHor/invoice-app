import { FiltersState } from "types";
import { useFilters } from "hooks";

import "./Filter.css";

interface FilterProps {
  id: string;
  name: keyof FiltersState;
  title: string;
}

export const Filter = ({ id, name, title }: FilterProps): React.JSX.Element => {
  const { filters, setFilters } = useFilters();

  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="mr-3"
        onChange={() =>
          setFilters((prevFilter: FiltersState) => ({
            ...prevFilter,
            [name]: !prevFilter[name],
          }))
        }
        checked={filters[name]}
      />
      <label htmlFor={id}>{title}</label>
    </li>
  );
};
