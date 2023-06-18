import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { AccountUpdates, Invoice } from "types";
import { deleteInvoice, postInvoice, updateInvoice } from "api";
import { QUERY_INVOICES, QUERY_USER } from "utils/constants";
import { useAuth } from "./contextHooks";

export const useUpdateUser = (
  path = "/account",
  options?: {
    headers: { [key: string]: string };
  }
) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation({
    mutationFn: async (payload: AccountUpdates | FormData) =>
      await axiosPrivate.patch(`/user${path}`, payload, {
        headers: { "Content-Type": "application/json", ...options?.headers },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_USER]);
    },
  });
};

export const useDeleteUser = (path = "/account") => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation({
    mutationFn: async () =>
      await axiosPrivate.delete(`/user${path}`, {
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_USER]);
    },
  });
};

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuth();

  return useMutation({
    mutationFn: async ({ newInvoice }: { newInvoice: Invoice }) =>
      await postInvoice({ invoice: newInvoice, isDemo: !auth.isLoggedIn }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_INVOICES]);
    },
  });
};

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuth();

  return useMutation({
    mutationFn: async ({
      id,
      updatedInvoice,
    }: {
      id: string;
      updatedInvoice: Invoice;
    }) => await updateInvoice({ id, updatedInvoice, isDemo: !auth.isLoggedIn }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_INVOICES]);
    },
  });
};

export const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuth();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) =>
      await deleteInvoice({ id, isDemo: !auth.isLoggedIn }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_INVOICES]);
    },
  });
};
