import { Field } from "formik";
import { Checkbox } from "formik-mui";
import { useTheme } from "hooks";

interface InputSelectFieldProps {
  label: string;
  id: string;
}

export const InputCheckboxField = ({ label, id }: InputSelectFieldProps) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field relative flex flex-col`}>
      <Field
        component={Checkbox}
        label={label}
        name={id}
        id={id}
        type={"checkbox"}
      ></Field>
    </div>
  );
};
