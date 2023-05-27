import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "api";
import { Invoice } from "types";

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, updatedInvoice }: { id: string; updatedInvoice: Invoice }) =>
      await updateInvoice(id, updatedInvoice),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["invoices"]);
      },
    }
  );
};
