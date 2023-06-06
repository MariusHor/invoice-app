import { useState } from "react";
import { isAxiosError } from "axios";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";

import { Button, InputTextField } from "components";
import { useUser } from "hooks/useQueries";
import { useUpdateUser } from "hooks/useMutations";
import { updateUsernameSchema } from "schemas";

interface GeneralSettingsValues {
  username: string;
  email: string;
}

export const AccountGeneral = (): React.JSX.Element => {
  const updateUser = useUpdateUser();
  const { data: user } = useUser();
  const [_, setState] = useState();

  const initialValues = {
    username: user.username ?? "",
    email: user?.email ?? "",
  };

  const handleSubmit = async (
    values: GeneralSettingsValues,
    { setSubmitting, setFieldError }: FormikHelpers<GeneralSettingsValues>
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

  return (
    <div className="flex grow flex-col gap-3 text-center">
      <Formik
        initialValues={initialValues}
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
