import { Form } from "features/Form";
import { InputTextField } from "features/InvoiceForm/inputTextField";
import { FormikHelpers } from "formik";
import { LayoutLoginRegister } from "layouts/layoutLoginRegister";
import { RegisterValues } from "types";

export const Register = (): React.JSX.Element => {
  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const handleSubmit = (
    values: RegisterValues,
    { setSubmitting }: FormikHelpers<RegisterValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <LayoutLoginRegister>
      <Form
        isLogin={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <InputTextField
          label={"Confirm Password"}
          id={"passwordConfirm"}
          type="password"
        />
      </Form>
    </LayoutLoginRegister>
  );
};
