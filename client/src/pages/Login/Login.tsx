import { useLocation, useNavigate } from "react-router-dom";

import { Auth as LayoutAuth } from "layouts";
import { RegisterLoginForm } from "features";
import { InputCheckboxField } from "components";
import { useAuth } from "hooks";
import { LOGIN_FORM_INIT_VALUES } from "utils/constants";

export const Login = (): React.JSX.Element => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <LayoutAuth>
      <RegisterLoginForm
        isLogin={true}
        initialValues={LOGIN_FORM_INIT_VALUES}
        onSubmit={async (values, helpers) => {
          await handleLogin(values, helpers, () =>
            navigate(state?.from ?? "/dashboard")
          );
        }}
      >
        <InputCheckboxField
          id={"rememberMe"}
          label="Remember me?"
        ></InputCheckboxField>
      </RegisterLoginForm>
    </LayoutAuth>
  );
};
