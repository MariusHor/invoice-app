import { OptionProps, components } from "react-select";
import { NavLink } from "react-router-dom";
import { SelectOption } from "types";

export const SelectOptionLink = (props: OptionProps<SelectOption>) => {
  const { Option } = components;
  const { value, label } = props.data;

  return (
    <NavLink to={value} end>
      <Option {...props}>{label}</Option>
    </NavLink>
  );
};
