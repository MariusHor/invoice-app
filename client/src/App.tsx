import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryProvider, FiltersProvider } from "providers";
import { queryClient } from "lib";
import { LayoutInvoices, LayoutInvoice, LayoutShared } from "layouts";
import {
  ErrorPage,
  Root,
  Invoices,
  InvoiceEdit,
  InvoiceCreate,
  InvoiceView,
  invoicesLoader,
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
            element: <LayoutInvoices />,
            loader: invoicesLoader(queryClient),
            children: [
              {
                index: true,
                element: <Invoices />,
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
