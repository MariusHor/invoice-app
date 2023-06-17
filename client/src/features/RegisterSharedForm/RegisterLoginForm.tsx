import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FormikHelpers } from "formik";

import { InputTextField, InputPasswordField, Form } from "components";
import { loginSchema, registerSchema } from "schemas";
import { RegisterValues } from "types";

interface FormProps {
  initialValues: RegisterValues;
  children?: ReactNode;
  isLogin?: boolean;
  onSubmit: (
    values: RegisterValues,
    formikHelpers: FormikHelpers<RegisterValues>
  ) => void;
}
export const RegisterLoginForm = ({
  isLogin,
  onSubmit,
  initialValues,
  children,
}: FormProps): React.JSX.Element => {
  return (
    <div className="w-full">
      <h1 className="heading-lg mb-4">
        {isLogin ? "Log in" : "Register"} to
        <span className="font-bold text-skin-accent"> Paperless</span>
      </h1>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={isLogin ? loginSchema : registerSchema}
        submitBtn={{ text: isLogin ? "Log in" : "Register" }}
      >
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
      </Form>
      <FormRedirect
        title={isLogin ? "Don't have an account?" : "Already a member?"}
        path={isLogin ? "/register" : "/login"}
        linkText={isLogin ? "Sign up" : "Log in"}
      />
    </div>
  );
};

interface FormRedirectProps {
  title: string;
  path: string;
  linkText: string;
}

const FormRedirect = ({
  title,
  path,
  linkText,
}: FormRedirectProps): React.JSX.Element => {
  return (
    <div className="flex-center mt-4 gap-2">
      <p>{title}</p>
      <Link to={path} className="transition-primary text-skin-accent">
        {linkText}
      </Link>
    </div>
  );
};
