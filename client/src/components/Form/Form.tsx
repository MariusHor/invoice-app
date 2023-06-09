import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { Button } from "components";
import { SubmitBtn } from "types";
import { ReactNode } from "react";

export interface FormProps {
  initialValues: object;
  children?: ReactNode;
  validationSchema?: object;
  submitBtn: SubmitBtn;
  onSubmit: (values: object, { setSubmitting }: FormikHelpers<object>) => void;
}

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
