import { Field } from "formik";
import { MenuItem } from "@mui/material";
import { Select } from "formik-mui";

import { useTheme } from "hooks";
import { InputProps } from "types";

export const InputSelectField = ({
  label,
  id,
}: InputProps): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field relative flex flex-col`}>
      <Field component={Select} label={label} name={id} id={id}>
        <MenuItem value={1}>Next day</MenuItem>
        <MenuItem value={5}>Next 5 days</MenuItem>
        <MenuItem value={10}>Next 10 days</MenuItem>
      </Field>
    </div>
  );
};
