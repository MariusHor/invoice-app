import { Field } from "formik";
import { MenuItem } from "@mui/material";
import { Select } from "formik-mui";

interface InputSelectFieldProps {
  label: string;
  id: string;
}

export const InputSelectField = ({ label, id }: InputSelectFieldProps) => {
  return (
    <div className="relative flex grow flex-col">
      <Field component={Select} label={label} name={id} id={id}>
        <MenuItem value={"Next 10 days"}>Next 10 days</MenuItem>
        <MenuItem value={"Next 30 days"}>Next 30 days</MenuItem>
        <MenuItem value={"Next 60 days"}>Next 60 days</MenuItem>
      </Field>
    </div>
  );
};
