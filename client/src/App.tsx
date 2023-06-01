import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryProvider, FiltersProvider, ThemeProvider } from "providers";
import { queryClient } from "lib";
import { LayoutInvoice, LayoutPrivate } from "layouts";

import {
  ErrorPage,
  InvoiceEdit,
  InvoiceCreate,
  InvoiceView,
  invoicesLoader,
  Dashboard,
  Home,
} from "pages";

import "./App.css";
import { LayoutPublic } from "layouts/LayourPublic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route element={<LayoutPublic />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Home />} />
        <Route path="register" element={<Home />} />
      </Route>
      <Route path="invoices" element={<LayoutPrivate />}>
        <Route
          index
          element={<Dashboard />}
          loader={invoicesLoader(queryClient)}
        />
        <Route element={<LayoutInvoice />}>
          <Route path="create" element={<InvoiceCreate />} />
          <Route
            path=":id"
            element={<InvoiceView />}
            loader={invoicesLoader(queryClient)}
          />
          <Route
            path=":id/edit"
            element={<InvoiceEdit />}
            loader={invoicesLoader(queryClient)}
          />
        </Route>
      </Route>
    </Route>
  )
);

const App = (): React.JSX.Element => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <FiltersProvider>
          <RouterProvider router={router} />
        </FiltersProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default App;
