import * as yup from "yup";

export const getCharacterValidationError = (str: string) => {
  return `Password must have at least 1 ${str} character`;
};

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must have at least 3 characters")
      .max(24, "Username must have at most 24 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must have at least 8 characters")
      .max(24, "Password must have at most 24 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[!@#$%]/, getCharacterValidationError("symbol"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Password confirmation is required"),
  })
  .required();
