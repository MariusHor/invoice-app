import { Navbar, Header } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InvoiceList from "./components/InvoiceList";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

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
