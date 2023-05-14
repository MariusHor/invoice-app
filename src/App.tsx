import { Navbar, Header, InvoiceList, ErrorBoundary } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { FiltersProvider } from "./context/filters";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: 1000 * 20,
      cacheTime: Infinity,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <FiltersProvider>
          <Header />
          <ErrorBoundary>
            <InvoiceList />
          </ErrorBoundary>
        </FiltersProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
