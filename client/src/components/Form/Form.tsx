import { ReactNode } from "react";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";

import { Button } from "components";
import { SubmitBtn } from "types";

export interface FormProps {
  onSubmit: (values: object, { setSubmitting }: FormikHelpers<object>) => void;
  initialValues: object;
  submitBtn: SubmitBtn;
  children?: ReactNode;
  validationSchema?: object;
}

export const Form = ({
  onSubmit,
  initialValues,
  submitBtn,
  validationSchema,
  children,
}: FormProps): React.JSX.Element => {
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
            name="submit"
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
