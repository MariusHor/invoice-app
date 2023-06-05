import { isAxiosError } from "axios";
import { Button } from "components";
import { InputPasswordField } from "components/Inputs/InputPasswordField";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { useSignout } from "hooks";
import { useUser } from "hooks/useInvoices";
import { useUpdateUserPassword } from "hooks/useUpdateUser";
import { useState } from "react";
import { getCharacterValidationError } from "schemas/registerSchema";
import * as yup from "yup";

interface PasswordValues {
  oldPassword: string;
  newPassword: string;
}

export const AccountPassword = (): React.JSX.Element => {
  const signout = useSignout();
  const { data: user } = useUser();
  const updateUserPassword = useUpdateUserPassword();
  const [_, setState] = useState();

  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };

  const handleSubmit = async (
    values: PasswordValues,
    { setSubmitting, setFieldError }: FormikHelpers<PasswordValues>
  ) => {
    const { oldPassword, newPassword } = values;

    try {
      await updateUserPassword.mutateAsync({
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

  const schema = yup
    .object({
      oldPassword: yup
        .string()
        .optional()
        .min(8, "Old password should have at least 8 characters")
        .max(24, "Old password should have at most 24 characters"),
      newPassword: yup
        .string()
        .optional()
        .min(8, "Password must have at least 8 characters")
        .max(24, "Password must have at most 24 characters")
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[!@#$%]/, getCharacterValidationError("symbol"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    })
    .required();

  return (
    <div className="flex grow flex-col gap-3 text-center">
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={schema}
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
