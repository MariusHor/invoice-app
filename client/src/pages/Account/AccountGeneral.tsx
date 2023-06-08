import { useState } from "react";
import { isAxiosError } from "axios";
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
  FormikValues,
} from "formik";

import { Button, InputTextField, Spinner } from "components";
import { useUpdateUser, useUser } from "hooks";
import { updateUsernameSchema } from "schemas";
import { RESET_USERNAME_INIT_VALUES } from "utils/constants";

export const AccountGeneral = (): React.JSX.Element => {
  const updateUser = useUpdateUser();
  const { data: user, isLoading } = useUser();
  const [_, setState] = useState();

  if (isLoading) return <Spinner />;

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, setFieldError }: FormikHelpers<FormikValues>
  ) => {
    const { username, email } = values;

    try {
      await updateUser.mutateAsync({ username, email });
      setSubmitting(false);
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

  const dbInitValues: FormikValues = {
    username: user?.username,
    email: user?.email,
  };

  return (
    <div className="flex grow flex-col gap-3 text-center">
      <Formik
        initialValues={dbInitValues || RESET_USERNAME_INIT_VALUES}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={updateUsernameSchema}
      >
        {({ isSubmitting, values }) => (
          <FormikForm className="flex w-full flex-col gap-5">
            <InputTextField label={"Username"} id={"username"} />
            <InputTextField type="email" label="Email" id="email" />
            <Button
              intent="accent"
              type="submit"
              disabled={
                isSubmitting ||
                (values.username === user.username &&
                  values.email === user.email)
              }
              className="mx-auto mt-4 w-fit"
            >
              Save Changes
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
