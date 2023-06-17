import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib";
import { ProviderProps } from "types";

export const ReactQueryProvider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
