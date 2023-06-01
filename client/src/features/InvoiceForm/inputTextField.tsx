import { Field } from "formik";
import { TextField } from "formik-mui";
import { useTheme } from "hooks";

interface InputTextFieldProps {
  label: string;
  id: string;
  type?: string;
}

export const InputTextField = ({
  label,
  id,
  type = "text",
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
      />
    </div>
  );
};
