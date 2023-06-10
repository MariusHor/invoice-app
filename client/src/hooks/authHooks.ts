import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth, usePersist } from "./contextHooks";
import { getSignout, postLogin, getRefreshToken } from "api";
import { LoginValues } from "types";
import { HOME_PATH, PERSIST_FALSE } from "utils/constants";

export const useLogin = () => {
  const { setAuth } = useAuth();
  const { state } = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    async ({ password, username }: LoginValues) =>
      await postLogin({ password, username }),
    {
      onSuccess: async ({ data }) => {
        const { accessToken, email, hasProfilePicture } = data;
        setAuth({
          isLoggedIn: true,
          accessToken,
          email,
          hasProfilePicture,
        });

        queryClient.removeQueries();
        await queryClient.invalidateQueries();
        navigate(state?.from ?? "/dashboard");
      },
      onError: (error) => {
        throw error;
      },
    }
  );
};

export const useSignout = () => {
  const { setAuth } = useAuth();
  const { setPersist } = usePersist();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return async (path?: string) => {
    setAuth({});
    setPersist(PERSIST_FALSE);
    queryClient.removeQueries();
    navigate(path ?? HOME_PATH);

    try {
      await getSignout();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  return async () => {
    try {
      const response = await getRefreshToken();
      const { username, accessToken, email, hasProfilePicture } = response.data;

      setAuth((prev) => {
        return {
          ...prev,
          accessToken,
          username,
          email,
          hasProfilePicture,
          isLoggedIn: true,
        };
      });

      return accessToken;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
