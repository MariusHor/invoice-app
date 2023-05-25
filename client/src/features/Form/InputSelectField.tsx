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
        <MenuItem value={"paid"}>Paid</MenuItem>
        <MenuItem value={"5"}>Next 5 days</MenuItem>
        <MenuItem value={"10"}>Next 10 days</MenuItem>
      </Field>
    </div>
  );
};
