import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { AccountUpdates, Invoice } from "types";
import { deleteInvoice, postInvoice, updateInvoice } from "api";
import { QUERY_INVOICES, QUERY_USER } from "utils/constants";

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
        queryClient.invalidateQueries([QUERY_USER]);
      },
    }
  );
};

export const useDeleteUser = (path = "/account") => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async () =>
      await axiosPrivate.delete(`/user${path}`, {
        headers: { "Content-Type": "application/json" },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_USER]);
      },
    }
  );
};

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ newInvoice }: { newInvoice: Invoice }) =>
      await postInvoice(newInvoice),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_INVOICES]);
      },
    }
  );
};

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, updatedInvoice }: { id: string; updatedInvoice: Invoice }) =>
      await updateInvoice(id, updatedInvoice),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_INVOICES]);
      },
    }
  );
};

export const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id }: { id: string }) => await deleteInvoice(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_INVOICES]);
      },
    }
  );
};
