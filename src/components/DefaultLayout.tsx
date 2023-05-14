import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary, Navbar } from "components";
import { FiltersProvider } from "context/filters";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  queryClient: QueryClient;
  children: ReactNode;
}

const DefaultLayout = ({ queryClient, children }: DefaultLayoutProps) => {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <FiltersProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </FiltersProvider>
      </QueryClientProvider>
    </>
  );
};

export default DefaultLayout;
