import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";

interface AccountUpdates {
  username?: string;
  email?: string;
  image?: FormData;
  oldPassword?: string;
  newPassword?: string;
}

export const useUpdateUser = (
  path = "/account",
  options?: {
    headers: { [key: string]: string };
  }
) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async (payload: AccountUpdates | FormData) =>
      await axiosPrivate.patch(`/user${path}`, payload, {
        headers: { "Content-Type": "application/json", ...options?.headers },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
};

export const useDeleteUser = (path = "/account") => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(async () => await axiosPrivate.delete(`/user${path}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });
};
