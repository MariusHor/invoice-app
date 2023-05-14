import { QueryClient } from "@tanstack/react-query";
import { Header, InvoicesWrapper } from "components";
import DefaultLayout from "components/DefaultLayout";

const Main = ({ queryClient }: { queryClient: QueryClient }) => {
  return (
    <DefaultLayout queryClient={queryClient}>
      <Header />
      <InvoicesWrapper />
    </DefaultLayout>
  );
};

export default Main;
