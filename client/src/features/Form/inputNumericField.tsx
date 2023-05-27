import { InputAdornment } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";
import { useTheme } from "hooks";

interface InputNumericFieldProps {
  label: string;
  id: string;
}

export const InputNumericField = ({ label, id }: InputNumericFieldProps) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field relative flex flex-col`}>
      <Field
        component={TextField}
        label={label}
        name={id}
        id={id}
        type="number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span className="text-skin-muted">$</span>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
