import { ReactNode } from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";

import { useTheme } from "hooks";

interface InputTextFieldProps {
  label: string;
  id: string;
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
}: InputTextFieldProps) => {
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
