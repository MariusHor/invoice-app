import { QueryClient } from "@tanstack/react-query";
import { invoicesQuery } from "hooks/useInvoices";

export const invoicesLoader = (queryClient: QueryClient) => async () => {
  const query = invoicesQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
