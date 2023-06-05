import { isAxiosError } from "axios";
import { Button } from "components";
import { InputTextField } from "components/Inputs/inputTextField";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { useUser } from "hooks/useInvoices";
import { useUpdateUserSettings } from "hooks/useUpdateUser";
import { useState } from "react";
import * as yup from "yup";

interface GeneralSettingsValues {
  username: string;
  email: string;
}

export const AccountGeneral = (): React.JSX.Element => {
  const updateUser = useUpdateUserSettings();
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

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email().optional(),
  });

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
