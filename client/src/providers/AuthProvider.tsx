import { postRegister } from "api";
import { isAxiosError } from "axios";
import { FormikHelpers } from "formik";
import { useLogin, usePersist, useSignout } from "hooks";
import { useState, createContext } from "react";
import { toast } from "react-hot-toast";

import {
  Auth,
  AuthContextInterface,
  LoginValues,
  ProviderProps,
  RegisterValues,
} from "types";
import { capitalize } from "utils";

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({
  children,
}: ProviderProps): React.JSX.Element => {
  const [auth, setAuth] = useState<Auth>({});
  const [_, setState] = useState();
  const { setPersist } = usePersist();
  const login = useLogin(setAuth);
  const signout = useSignout(setAuth);

  const handleRegister = async (
    values: RegisterValues,
    { setSubmitting, setFieldError }: FormikHelpers<RegisterValues>,
    navigate: () => void
  ) => {
    const { username, password } = values;

    try {
      await postRegister({ username, password });
      toast.success("Successfully registered!");
      setSubmitting(false);
      return navigate();
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 409:
            return setFieldError("username", error.response.data.message);
          default:
            setState(() => {
              throw error;
            });
        }
      }

      return setState(() => {
        throw error;
      });
    }
  };

  const handleLogin = async (
    values: LoginValues,
    { setSubmitting, setFieldError }: FormikHelpers<LoginValues>,
    navigate: () => void
  ) => {
    const { username, password, rememberMe } = values;

    try {
      await login.mutateAsync({ password, username });
      if (rememberMe !== undefined) setPersist(rememberMe);
      if (username) toast.success(`Welcome back, ${capitalize(username)}`);
      setSubmitting(false);
      return navigate();
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case 404:
            return setFieldError("username", error.response.data.message);
          case 401:
            return setFieldError("password", error.response.data.message);
          default:
            setState(() => {
              throw error;
            });
        }
      }

      return setState(() => {
        throw error;
      });
    }
  };

  const handleSignout = async (
    navigate: () => void,
    message = "Successfully signed out!"
  ) => {
    try {
      await signout();
      toast.success(message);
      return navigate();
    } catch (error) {
      return setState(() => {
        throw error;
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, handleRegister, handleLogin, handleSignout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
