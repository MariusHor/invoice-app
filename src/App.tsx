import { Navbar, Header } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InvoiceList } from "./components/InvoiceList";

import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Header />
      <InvoiceList />
    </QueryClientProvider>
  );
};

export default App;
