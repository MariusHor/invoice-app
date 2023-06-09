import { useState } from "react";
import { isAxiosError } from "axios";
import { FormikHelpers, FormikValues } from "formik";

import { Form, InputTextField, Spinner } from "components";
import { useAuth, useUpdateUser, useUser } from "hooks";
import { updateUsernameSchema } from "schemas";
import { RESET_USERNAME_INIT_VALUES } from "utils/constants";
import { toast } from "react-hot-toast";

export const AccountGeneral = (): React.JSX.Element => {
  const updateUser = useUpdateUser();
  const { data: user, isLoading } = useUser();
  const { auth, setAuth } = useAuth();
  const [_, setState] = useState();

  if (isLoading) return <Spinner />;

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, setFieldError }: FormikHelpers<FormikValues>
  ) => {
    const { username, email } = values;

    try {
      await updateUser.mutateAsync({ username, email });
      setAuth((prev) => ({ ...prev, username, email }));

      if (username !== auth.username)
        toast.success(`Username updated: ${username}`);

      if (email !== auth.email) toast.success(`email updated: ${email}`);

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
      <Form
        initialValues={dbInitValues || RESET_USERNAME_INIT_VALUES}
        onSubmit={handleSubmit}
        validationSchema={updateUsernameSchema}
        submitBtn={{
          intent: "accent",
          text: "Save Changes",
          disabled: (isSubmitting: boolean, values: FormikValues) =>
            isSubmitting ||
            (values.username === user.username && values.email === user.email),
        }}
      >
        <InputTextField label={"Username"} id={"username"} />
        <InputTextField type="email" label="Email" id="email" />
      </Form>
    </div>
  );
};
