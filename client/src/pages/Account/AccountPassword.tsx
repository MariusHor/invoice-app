import { useState } from "react";
import { isAxiosError } from "axios";
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
  FormikValues,
} from "formik";

import { Button, InputPasswordField } from "components";
import { useSignout, useUpdateUser, useUser } from "hooks";
import { updatePasswordSchema } from "schemas";
import { RESET_PASS_INIT_VALUES } from "utils/constants";

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
      <Formik
        initialValues={RESET_PASS_INIT_VALUES}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={updatePasswordSchema}
      >
        {({ isSubmitting, values }) => (
          <FormikForm className="flex w-full flex-col gap-5">
            <InputPasswordField label="Old Password" id="oldPassword" />
            <InputPasswordField label="New Password" id="newPassword" />
            <Button
              intent="accent"
              type="submit"
              disabled={
                isSubmitting ||
                !values.oldPassword.length ||
                !values.newPassword.length
              }
              className="mx-auto mt-4 w-fit"
            >
              Change
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
