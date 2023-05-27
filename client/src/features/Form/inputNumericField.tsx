import { InputAdornment } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";

interface InputNumericFieldProps {
  label: string;
  id: string;
}

export const InputNumericField = ({ label, id }: InputNumericFieldProps) => {
  return (
    <div className="relative flex flex-col">
      <Field
        component={TextField}
        label={label}
        name={id}
        id={id}
        type="number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span>$</span>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
