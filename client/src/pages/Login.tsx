import { Form } from "features/Form";
import { FormikHelpers } from "formik";
import { LayoutLoginRegister } from "layouts/layoutLoginRegister";
import { LoginValues } from "types";

export const Login = (): React.JSX.Element => {
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <LayoutLoginRegister>
      <Form
        isLogin={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </LayoutLoginRegister>
  );
};
