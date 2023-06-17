import { useNavigate } from "react-router-dom";

import { Auth as LayoutAuth } from "layouts";
import { RegisterLoginForm } from "features";
import { InputPasswordField } from "components";
import { REGISTER_FORM_INIT_VALUES } from "utils/constants";
import { useAuth } from "hooks";

export const Register = (): React.JSX.Element => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  return (
    <LayoutAuth>
      <RegisterLoginForm
        isLogin={false}
        initialValues={REGISTER_FORM_INIT_VALUES}
        onSubmit={async (values, helpers) => {
          await handleRegister(values, helpers, () => navigate("/login"));
        }}
      >
        <InputPasswordField
          label="Confirm Password"
          id="passwordConfirm"
          autocomplete={"new-password"}
        />
      </RegisterLoginForm>
    </LayoutAuth>
  );
};
