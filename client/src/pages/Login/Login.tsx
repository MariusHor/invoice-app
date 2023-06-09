import { useState } from "react";
import { isAxiosError } from "axios";
import { FormikHelpers } from "formik";

import { LayoutLoginRegister } from "layouts";
import { RegisterLoginForm } from "features";
import { InputCheckboxField } from "components";
import { useLogin, usePersist } from "hooks";
import { LOGIN_FORM_INIT_VALUES } from "utils/constants";
import { LoginValues } from "types";

export const Login = (): React.JSX.Element => {
  const [_, setState] = useState();
  const { setPersist } = usePersist();
  const login = useLogin();

  const handleLogin = async (
    values: LoginValues,
    { setSubmitting, setFieldError }: FormikHelpers<LoginValues>
  ) => {
    const { username, password, rememberMe } = values;

    try {
      await login.mutateAsync({ password, username });
      setSubmitting(false);
      if (rememberMe !== undefined) setPersist(rememberMe);
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 404:
            return setFieldError("username", error.response.data.message);
          case 401:
            return setFieldError("password", error.response.data.message);
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
        isLogin={true}
        initialValues={LOGIN_FORM_INIT_VALUES}
        onSubmit={handleLogin}
      >
        <InputCheckboxField
          id={"rememberMe"}
          label="Remember me?"
        ></InputCheckboxField>
      </RegisterLoginForm>
    </LayoutLoginRegister>
  );
};
