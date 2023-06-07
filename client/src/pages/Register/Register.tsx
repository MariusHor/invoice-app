import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { FormikHelpers } from "formik";

import { LayoutLoginRegister } from "layouts";
import { RegisterLoginForm } from "features";
import { InputPasswordField } from "components";
import { RegisterValues } from "types";
import { postRegister } from "api";

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
      <RegisterLoginForm
        isLogin={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <InputPasswordField label="Confirm Password" id="passwordConfirm" />
      </RegisterLoginForm>
    </LayoutLoginRegister>
  );
};
