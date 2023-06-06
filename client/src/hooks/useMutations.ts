import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";

interface SettingsUpdates {
  username?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async (settings: SettingsUpdates) =>
      await axiosPrivate.patch(`/user/account`, settings),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
};
