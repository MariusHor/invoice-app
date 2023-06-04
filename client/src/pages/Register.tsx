import { postRegister } from "api";
import { isAxiosError } from "axios";
import { Form } from "features/Form";
import { InputTextField } from "features/InvoiceForm/inputTextField";
import { FormikHelpers } from "formik";
import { LayoutLoginRegister } from "layouts/LayoutLoginRegister";
import { RegisterValues } from "types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = (): React.JSX.Element => {
  const [_, setState] = useState();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const handleSubmit = async (
    values: RegisterValues,
    { setSubmitting, setFieldError }: FormikHelpers<RegisterValues>
  ) => {
    const { username, password } = values;

    try {
      await postRegister({ username, password });
      setSubmitting(false);
      navigate("/login");
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 409:
            return setFieldError("username", error.response.data.message);
          default:
            setState(() => {
              throw error;
            });
        }
      }

      return setState(() => {
        throw error;
      });
    }
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
