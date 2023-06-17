import { Field } from "formik";
import { CheckboxWithLabel } from "formik-mui";

import { useTheme } from "hooks";
import { InputProps } from "types";

export const InputCheckboxField = ({
  label,
  id,
}: InputProps): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} field relative flex w-fit flex-col`}>
      <Field
        component={CheckboxWithLabel}
        name={id}
        id={id}
        type={"checkbox"}
        className="checkbox"
        Label={{
          label,
        }}
      />
    </div>
  );
};
