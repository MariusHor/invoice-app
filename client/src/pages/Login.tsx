import { postLogin } from "api";
import { isAxiosError } from "axios";
import { Form } from "features/Form";
import { FormikHelpers } from "formik";
import { useAuth } from "hooks";
import { LayoutLoginRegister } from "layouts/LayoutLoginRegister";
import { useNavigate } from "react-router-dom";
import { LoginValues } from "types";

export const Login = (): React.JSX.Element => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setFieldError }: FormikHelpers<LoginValues>
  ) => {
    const { username, password } = values;

    try {
      const { accessToken } = await postLogin({ password, username });

      setAuth({ username, password, accessToken: accessToken });
      setSubmitting(false);
      navigate("/dashboard");
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 404:
            setFieldError("username", error.response.data.message);
            break;
          case 401:
            setFieldError("password", error.response.data.message);
            break;
          default:
            throw error;
        }
      }
    }
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
