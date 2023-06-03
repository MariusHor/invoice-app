import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    staleTime: 0,
    cacheTime: 10 * (60 * 1000),
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// staleTime: 5 * (60 * 1000),
// cacheTime: 10 * (60 * 1000),
