import { useState } from "react";
import {
  Field,
  Formik,
  Form as FormikForm,
  FormikHelpers,
  FormikValues,
} from "formik";
import { SimpleFileUpload } from "formik-mui";

import { Button } from "components";
import { useAuth, useDeleteUser, useUpdateUser, useUser } from "hooks";
import { profilePictureUploadSchema } from "schemas";
import { UPLOAD_PROFILE_PICTURE_INIT_VALUES } from "utils/constants";
import { toast } from "react-hot-toast";

export const UploadProfilePictureForm = (): React.JSX.Element => {
  const [isUploading, setIsUploading] = useState(false);
  const [_, setState] = useState();
  const { data: user } = useUser();
  const { auth, setAuth } = useAuth();

  const deleteUserAvatar = useDeleteUser("/account/avatar");
  const updateUser = useUpdateUser("/account/avatar", {
    headers: { "Content-Type": "multipart/form-data" },
  });

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<FormikValues>
  ) => {
    const { file } = values;

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("name", file.name);

      await updateUser.mutateAsync(formData);

      setSubmitting(false);
      setIsUploading(false);
      resetForm();
      setAuth((prev) => ({ ...prev, hasProfilePicture: true }));

      const feedback = auth.hasProfilePicture
        ? "Profile picture updated!"
        : "Profile picture uploaded!";
      toast.success(feedback);
    } catch (error) {
      return setState(() => {
        throw error;
      });
    }
  };

  return (
    <Formik
      initialValues={UPLOAD_PROFILE_PICTURE_INIT_VALUES}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={profilePictureUploadSchema}
    >
      {({ isSubmitting, values }) => (
        <FormikForm className="flex w-full flex-col gap-4 sm:items-center">
          {isUploading ? (
            <div className="w-fit">
              <Field
                component={SimpleFileUpload}
                name="file"
                label="JPG, GIF or PNG. Max size of 800K"
              />
            </div>
          ) : null}
          <div className="flex flex-col gap-2 sm:flex-row">
            {isUploading ? (
              <Button
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
              onClick={async () => {
                await deleteUserAvatar.mutateAsync();
                setAuth((prev) => ({ ...prev, hasProfilePicture: false }));
                toast.success("Profile picture successfully deleted!");
              }}
              type="button"
              key={"delete-picture"}
              intent={"outlined"}
              disabled={!user.profilePicture}
            >
              Delete
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
