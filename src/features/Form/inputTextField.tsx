import { Field } from "formik";
import { TextField } from "formik-mui";

interface InputTextFieldProps {
  label: string;
  id: string;
}

export const InputTextField = ({ label, id }: InputTextFieldProps) => {
  return (
    <div className="relative flex flex-col">
      <Field component={TextField} label={label} name={id} id={id} />
    </div>
  );
};
