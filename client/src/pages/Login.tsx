import { postLogin } from "api";
import { isAxiosError } from "axios";
import { InputCheckboxField } from "components/Inputs/InputCheckboxField";
import { Form } from "features/Form";
import { FormikHelpers } from "formik";
import { useAuth, usePersist } from "hooks";
import { LayoutLoginRegister } from "layouts/LayoutLoginRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginValues } from "types";

export const Login = (): React.JSX.Element => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [_, setState] = useState();
  const { setPersist } = usePersist();

  const initialValues = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setFieldError }: FormikHelpers<LoginValues>
  ) => {
    const { username, password, rememberMe } = values;

    try {
      const { accessToken } = await postLogin({ password, username });

      setAuth({
        isLoggedIn: true,
        username,
        password,
        accessToken,
      });

      setSubmitting(false);

      if (rememberMe !== undefined) setPersist(rememberMe);

      navigate("/dashboard");
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
      <Form
        isLogin={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <InputCheckboxField
          id={"rememberMe"}
          label="Remember me?"
        ></InputCheckboxField>
      </Form>
    </LayoutLoginRegister>
  );
};
