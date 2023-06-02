import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInvoice } from "api";
import { Invoice } from "types";

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ newInvoice }: { newInvoice: Invoice }) =>
      await postInvoice(newInvoice),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["invoices"]);
      },
    }
  );
};
