import { useContext } from "react";
import { FiltersState } from "src/types/types";
import { FiltersContext } from "src/context/filters";
import "./Filter.css";

interface FilterProps {
  id: string;
  name: keyof FiltersState;
  title: string;
}

export const Filter = ({ id, name, title }: FilterProps): JSX.Element => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("FilterContext must be used within a FilterProvider");
  }

  const { filters, setFilters } = context;

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
