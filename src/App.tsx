import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { Home } from "pages/Home";
import { View } from "pages/View";

import "./App.css";
import Main from "pages/Main";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: 1000 * 20,
      cacheTime: Infinity,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/invoices",
    element: <Main queryClient={queryClient} />,
  },
  {
    path: "/invoices/:id",
    element: <View queryClient={queryClient} />,
  },
]);

const App = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
