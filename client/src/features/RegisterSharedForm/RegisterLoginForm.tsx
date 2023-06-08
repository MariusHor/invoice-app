import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";

import { Button, InputTextField, InputPasswordField } from "components";
import { loginSchema, registerSchema } from "schemas";
import { RegisterValues } from "types";

interface FormProps {
  initialValues: RegisterValues;
  children?: ReactNode;
  isLogin?: boolean;
  onSubmit: (
    values: RegisterValues,
    { setSubmitting }: FormikHelpers<RegisterValues>
  ) => void;
}

export const RegisterLoginForm = ({
  isLogin,
  onSubmit,
  initialValues,
  children,
}: FormProps) => {
  return (
    <>
      <h1 className="heading-lg mb-4">
        {isLogin ? "Log in" : "Register"} to
        <span className="font-bold text-skin-accent"> Paperless</span>
      </h1>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({ isSubmitting }) => (
          <FormikForm className="flex w-full flex-col gap-5">
            <InputTextField
              label={"Username"}
              id={"username"}
              autocomplete={"username"}
            />
            <InputPasswordField
              label="Password"
              id="password"
              autocomplete={isLogin ? "current-password" : "new-password"}
            />
            {children}
            <Button
              intent="primary"
              type="submit"
              disabled={isSubmitting}
              className="mx-auto mt-4 w-fit"
            >
              {isLogin ? "Log in" : "Register"}
            </Button>
          </FormikForm>
        )}
      </Formik>
      <div className="flex-center mt-4 gap-2">
        {isLogin ? (
          <>
            <p>Don't have an account?</p>
            <Link
              to="/register"
              className="transition-primary text-skin-accent"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            <p>Already a member?</p>
            <Link to="/login" className="transition-primary text-skin-accent">
              Log in
            </Link>
          </>
        )}
      </div>
    </>
  );
};
