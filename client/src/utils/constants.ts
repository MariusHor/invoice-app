import dayjs from "dayjs";
import { FormikValues } from "formik";
import { AccountRoutesConfig } from "types";

export const MAX_ALLOWED_FILE_SIZE = 97152;
export const ALLOWED_FILE_TYPES = ["gif", "png", "jpg", "jpeg"];
export const INVOICES_PER_PAGE = 6;
export const KEY_THEME = "theme";
export const KEY_PERSIST = "persist";
export const PERSIST_FALSE = false;
export const PERSIST_TRUE = true;
export const THEME_PRIMARY = "theme-light";
export const THEME_SECONDARY = "theme-dark";
export const DRAFT = "draft";
export const PAID = "paid";
export const PENDING = "pending";
export const INIT_PAGE = 1;
export const QUERY_USER = "user";
export const QUERY_INVOICES = "invoices";
export const HOME_PATH = "/";
export const DEMO_MODE_MAX_INVOICES = 3;

export const INVOICE_FORM_INIT_VALUES = {
  status: "draft",
  createdAt: dayjs(new Date()).format("YYYY-MM-DD"),
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  total: 0,
  items: [{ name: "", quantity: 0, price: 0, total: 0 }],
};

export const REGISTER_FORM_INIT_VALUES = {
  username: "",
  password: "",
  passwordConfirm: "",
};

export const LOGIN_FORM_INIT_VALUES = {
  username: "",
  password: "",
  rememberMe: false,
};

export const RESET_PASS_INIT_VALUES: FormikValues = {
  oldPassword: "",
  newPassword: "",
};

export const RESET_USERNAME_INIT_VALUES: FormikValues = {
  username: "",
  email: "",
};

export const UPLOAD_PROFILE_PICTURE_INIT_VALUES: FormikValues = {
  file: "",
};

export const ACCOUNT_ROUTES_CONFIG: AccountRoutesConfig = {
  "account/profile": {
    title: "Edit Profile",
    phrase: "Set up your Paperless presence",
  },
  "account/password": {
    title: "Password",
    phrase: "Manage your password",
  },
  account: {
    title: "General",
    phrase: "Update your username and email",
  },
};

export const ACCOUNT_ROUTES_PATHS = {
  "/account": "General",
  profile: "Edit Profile",
  password: "Password",
};
