import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";

export const useUpdateUserSettings = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async (settings: { username: string; email: string }) =>
      await axiosPrivate.patch(`/user/account`, settings),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
};

export const useUpdateUserPassword = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async (settings: {
      oldPassword: string;
      newPassword: string;
      username: string;
    }) => await axiosPrivate.patch(`/user/account`, settings),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
};
