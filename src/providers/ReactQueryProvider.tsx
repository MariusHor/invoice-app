import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib";
import { ReactNode } from "react";

interface ReactQueryProviderProps {
  children: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
