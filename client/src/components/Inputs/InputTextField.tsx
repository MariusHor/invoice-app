import { ReactNode } from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

import { useTheme } from "hooks";
import { InputProps } from "types";

interface InputTextFieldProps extends InputProps {
  type?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  autocomplete?: string;
}

export const InputTextField = ({
  startAdornment,
  endAdornment,
  label,
  id,
  type = "text",
  autocomplete,
}: InputTextFieldProps): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field relative flex flex-col rounded-md`}>
      <Field
        component={TextField}
        type={type}
        label={label}
        name={id}
        id={id}
        className="text-white"
        InputProps={{
          startAdornment: startAdornment,
          endAdornment: endAdornment,
        }}
        autoComplete={autocomplete}
      />
    </div>
  );
};
