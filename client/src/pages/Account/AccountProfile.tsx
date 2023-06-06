import { Avatar, Button } from "components";
import { useState } from "react";
import { Field, Formik, Form as FormikForm } from "formik";
import { SimpleFileUpload } from "formik-mui";

export const AccountProfile = (): React.JSX.Element => {
  return (
    <div className="flex grow flex-col gap-3 text-center">
      <div className="flex items-center gap-6">
        <div>
          <Avatar intent={"secondary"} />
        </div>
        <UploadPictureForm />
      </div>
    </div>
  );
};

const UploadPictureForm = (): React.JSX.Element => {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (values: object) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{}}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
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
                key={"upload-picture"}
                intent="accent"
                type="submit"
                disabled={isSubmitting}
                className="w-fit"
              >
                Upload Now
              </Button>
            ) : (
              <Button
                key={"expand-form"}
                onClick={() => setIsUploading(!isUploading)}
                intent="accent"
                type="button"
                className="w-fit"
              >
                Upload new picture
              </Button>
            )}

            <Button
              type="submit"
              key={"delete-picture"}
              intent={"outlined"}
              className="w-fit"
            >
              Delete
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
