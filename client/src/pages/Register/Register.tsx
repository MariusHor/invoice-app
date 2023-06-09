import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { isAxiosError } from "axios";

import { LayoutLoginRegister } from "layouts";
import { RegisterLoginForm } from "features";
import { InputPasswordField } from "components";
import { postRegister } from "api";
import { REGISTER_FORM_INIT_VALUES } from "utils/constants";
import { RegisterValues } from "types";
import { toast } from "react-hot-toast";

export const Register = (): React.JSX.Element => {
  const [_, setState] = useState();
  const navigate = useNavigate();

  const handleRegister = async (
    values: RegisterValues,
    { setSubmitting, setFieldError }: FormikHelpers<RegisterValues>
  ) => {
    const { username, password } = values;

    try {
      await postRegister({ username, password });
      toast.success("Successfully registered!");
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
        initialValues={REGISTER_FORM_INIT_VALUES}
        onSubmit={handleRegister}
      >
        <InputPasswordField
          label="Confirm Password"
          id="passwordConfirm"
          autocomplete={"new-password"}
        />
      </RegisterLoginForm>
    </LayoutLoginRegister>
  );
};
