import * as yup from "yup";
import { getCharacterValidationError } from "utils";

export const updatePasswordSchema = yup
  .object({
    oldPassword: yup
      .string()
      .optional()
      .min(8, "Old password should have at least 8 characters")
      .max(24, "Old password should have at most 24 characters"),
    newPassword: yup
      .string()
      .optional()
      .min(8, "Password must have at least 8 characters")
      .max(24, "Password must have at most 24 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[!@#$%]/, getCharacterValidationError("symbol"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  })
  .required();

export const updateUsernameSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().optional(),
});
