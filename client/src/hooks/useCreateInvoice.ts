import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addInvoice } from "api";
import { Invoice } from "types";

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ newInvoice }: { newInvoice: Invoice }) =>
      await addInvoice(newInvoice),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["invoices"]);
      },
    }
  );
};
