import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryProvider, FiltersProvider } from "providers";
import { queryClient } from "lib";
import { LayoutInvoice, LayoutShared, LayoutDashboard } from "layouts";
import {
  ErrorPage,
  Root,
  InvoiceEdit,
  InvoiceCreate,
  InvoiceView,
  invoicesLoader,
  Dashboard,
} from "pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutShared />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "invoices",
        children: [
          {
            element: <LayoutDashboard />,
            loader: invoicesLoader(queryClient),
            children: [
              {
                index: true,
                element: <Dashboard />,
                loader: invoicesLoader(queryClient),
              },
            ],
          },
          {
            element: <LayoutInvoice />,
            children: [
              {
                path: "create",
                element: <InvoiceCreate />,
              },
              {
                path: ":id",
                element: <InvoiceView />,
                loader: invoicesLoader(queryClient),
              },
              {
                path: ":id/edit",
                element: <InvoiceEdit />,
                loader: invoicesLoader(queryClient),
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = (): React.JSX.Element => {
  return (
    <ReactQueryProvider>
      <FiltersProvider>
        <RouterProvider router={router} />
      </FiltersProvider>
    </ReactQueryProvider>
  );
};

export default App;
