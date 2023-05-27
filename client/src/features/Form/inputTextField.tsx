import { Field } from "formik";
import { TextField } from "formik-mui";
import { useTheme } from "hooks";

interface InputTextFieldProps {
  label: string;
  id: string;
}

export const InputTextField = ({ label, id }: InputTextFieldProps) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field relative flex flex-col rounded-md`}>
      <Field
        component={TextField}
        label={label}
        name={id}
        id={id}
        className="text-white"
      />
    </div>
  );
};
