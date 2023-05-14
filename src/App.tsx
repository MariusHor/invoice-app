import { Navbar, Header, InvoiceList, ErrorBoundary } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Header />
      <ErrorBoundary>
        <InvoiceList />
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
