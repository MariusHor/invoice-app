import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";

import { SelectOptionLink } from "components";
import { SelectOption } from "types";

const SelectOptions = [
  { value: "/account", label: "General" },
  { value: "profile", label: "Edit Profile" },
  { value: "password", label: "Password" },
];

interface SelectNavProps {
  classes?: string;
}

export const SelectNav = ({ classes }: SelectNavProps): React.JSX.Element => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  useEffect(() => {
    const path = location.pathname.split("/").pop();

    if (path) {
      const currentOption = SelectOptions.find((option) =>
        option.value.includes(path)
      ) as SelectOption;

      setSelectedOption(currentOption);
    }
  }, [location]);

  return (
    <Select
      className={classes}
      value={selectedOption}
      options={SelectOptions}
      components={{
        Option: SelectOptionLink,
      }}
      styles={{
        menu: (provided) => ({ ...provided, zIndex: 9999, color: "black" }),
      }}
    />
  );
};
