import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth, usePersist } from "./contextHooks";
import { getSignout, postLogin, getRefreshToken } from "api";
import { Auth, LoginValues } from "types";
import { PERSIST_FALSE } from "utils/constants";
import { parseJwt } from "utils";

export const useLogin = (
  setAuth: React.Dispatch<React.SetStateAction<Auth>>
) => {
  const queryClient = useQueryClient();

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
      },
      onError: (error) => {
        throw error;
      },
    }
  );
};

export const useSignout = (
  setAuth: React.Dispatch<React.SetStateAction<Auth>>
) => {
  const { setPersist } = usePersist();
  const queryClient = useQueryClient();

  return async () => {
    try {
      await getSignout();
      setAuth({});
      setPersist(PERSIST_FALSE);
      queryClient.removeQueries();
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

export const useCheckTokenExpiration = (accessToken: string | undefined) => {
  const decodedJwt = parseJwt(accessToken);
  return decodedJwt?.exp ? decodedJwt?.exp * 1000 < Date.now() : decodedJwt;
};
