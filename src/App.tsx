import { Navbar, Header, ErrorBoundary, InvoicesWrapper } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FiltersProvider } from "context/filters";

import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: 1000 * 20,
      cacheTime: Infinity,
    },
  },
});

const App = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <FiltersProvider>
          <Header />
          <ErrorBoundary>
            <InvoicesWrapper />
          </ErrorBoundary>
        </FiltersProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
