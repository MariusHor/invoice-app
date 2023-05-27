import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInvoice } from "api";

export const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id }: { id: string }) => await deleteInvoice(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["invoices"]);
      },
    }
  );
};
