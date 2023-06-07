import { Avatar, Button } from "components";
import { useState } from "react";
import {
  Field,
  Formik,
  Form as FormikForm,
  FormikHelpers,
  FormikValues,
} from "formik";
import { SimpleFileUpload } from "formik-mui";
import { useDeleteUser, useUpdateUser, useUser } from "hooks";

export const AccountProfile = (): React.JSX.Element => {
  return (
    <div className="flex grow flex-col gap-3 text-center">
      <div className="flex items-center gap-6">
        <div>
          <Avatar intent={"large"} />
        </div>
        <UploadImageForm />
      </div>
    </div>
  );
};

const UploadImageForm = (): React.JSX.Element => {
  const [isUploading, setIsUploading] = useState(false);
  const [formAction, setFormAction] = useState("");
  const [_, setState] = useState();
  const { data: user } = useUser();
  const deleteUserAvatar = useDeleteUser("/avatar");
  const updateUser = useUpdateUser("/avatar", {
    headers: { "Content-Type": "multipart/form-data" },
  });

  const initialValues: FormikValues = {
    file: "",
  };

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<FormikValues>
  ) => {
    const { file } = values;

    try {
      if (formAction === "delete") {
        await deleteUserAvatar.mutateAsync();
      }

      if (formAction === "upload") {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("name", file.name);
        await updateUser.mutateAsync(formData);
      }

      setSubmitting(false);
      setIsUploading(false);
      resetForm();
    } catch (error) {
      return setState(() => {
        throw error;
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <FormikForm className="flex w-full flex-col items-center gap-4">
          {isUploading ? (
            <Field
              component={SimpleFileUpload}
              name="file"
              label="JPG, GIF or PNG. Max size of 800K"
            />
          ) : null}
          <div className="flex gap-2">
            {isUploading ? (
              <Button
                onClick={() => {
                  setFormAction("upload");
                }}
                key={"upload-picture"}
                intent="accent"
                type="submit"
                disabled={isSubmitting || !values.file}
              >
                Upload Now
              </Button>
            ) : (
              <Button
                key={"expand-form"}
                onClick={() => setIsUploading(true)}
                intent="accent"
                type="button"
              >
                Upload new picture
              </Button>
            )}

            <Button
              onClick={() => {
                setFormAction("delete");
              }}
              type="submit"
              key={"delete-picture"}
              intent={"outlined"}
              disabled={!user.image}
            >
              Delete
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
