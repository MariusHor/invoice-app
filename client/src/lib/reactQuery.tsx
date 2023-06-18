import { DefaultOptions, QueryCache, QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: (error) => {
      if (isAxiosError(error) && error.response)
        return error.response.status >= 500;
      return false;
    },
    staleTime: 5 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined && isAxiosError(error)) {
        toast.error(`Something went wrong: ${error.message}`);
      }
    },
  }),
});
