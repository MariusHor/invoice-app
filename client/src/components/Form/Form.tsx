import { Formik, Form as FormikForm } from "formik";
import { Button } from "components";
import { FormProps } from "types";

export const Form = ({
  validationSchema,
  onSubmit,
  initialValues,
  children,
  submitBtn,
}: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, values }) => (
        <FormikForm className="flex w-full flex-col gap-5">
          {children}
          <Button
            intent={submitBtn?.intent ?? "primary"}
            type="submit"
            disabled={
              submitBtn.disabled
                ? submitBtn?.disabled(isSubmitting, values)
                : false
            }
            className="mx-auto mt-4 w-fit"
          >
            {submitBtn.text}
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};
