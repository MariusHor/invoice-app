import { useState } from "react";
import { isAxiosError } from "axios";
import { FormikHelpers, FormikValues } from "formik";

import { Form, InputPasswordField } from "components";
import { useSignout, useUpdateUser, useUser } from "hooks";
import { updatePasswordSchema } from "schemas";
import { RESET_PASS_INIT_VALUES } from "utils/constants";
import { toast } from "react-hot-toast";

export const AccountPassword = (): React.JSX.Element => {
  const signout = useSignout();
  const { data: user } = useUser();
  const updateUser = useUpdateUser();
  const [_, setState] = useState();

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, setFieldError }: FormikHelpers<FormikValues>
  ) => {
    const { oldPassword, newPassword } = values;

    try {
      await updateUser.mutateAsync({
        oldPassword,
        newPassword,
        username: user.username,
      });

      toast.success(`Password updated. Please login again!`);
      await signout("/login");

      setSubmitting(false);
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            return setFieldError("oldPassword", error.response.data.message);
          case 409:
            return setFieldError("newPassword", error.response.data.message);
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
    <div className="flex grow flex-col gap-3 text-center">
      <Form
        initialValues={RESET_PASS_INIT_VALUES}
        onSubmit={handleSubmit}
        validationSchema={updatePasswordSchema}
        submitBtn={{
          intent: "accent",
          text: "Change",
          disabled: (isSubmitting: boolean, values: FormikValues) =>
            isSubmitting ||
            !values.oldPassword.length ||
            !values.newPassword.length,
        }}
      >
        <InputPasswordField label="Old Password" id="oldPassword" />
        <InputPasswordField label="New Password" id="newPassword" />
      </Form>
    </div>
  );
};
