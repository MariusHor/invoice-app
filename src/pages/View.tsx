import { QueryClient } from "@tanstack/react-query";
import { ViewInvoice } from "components";
import DefaultLayout from "components/DefaultLayout";

export const View = ({ queryClient }: { queryClient: QueryClient }) => {
  return (
    <DefaultLayout queryClient={queryClient}>
      <ViewInvoice />
    </DefaultLayout>
  );
};
