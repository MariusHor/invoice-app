import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    staleTime: 1000 * 20,
    cacheTime: Infinity,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
