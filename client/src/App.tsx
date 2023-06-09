import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  AuthProvider,
  ReactQueryProvider,
  InvoiceFiltersProvider,
  ThemeProvider,
  PersistProvider,
} from "providers";
import {
  LayoutInvoice,
  LayoutPrivate,
  LayoutPublic,
  LayoutAccount,
} from "layouts";
import { AuthGuard, PersistLogin } from "containers";
import {
  ErrorPage,
  InvoiceEdit,
  InvoiceCreate,
  InvoiceView,
  Dashboard,
  Home,
  Login,
  Register,
  AccountGeneral,
  AccountProfile,
  AccountPassword,
} from "pages";

import "./App.css";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PersistLogin />}>
      <Route path="/" errorElement={<ErrorPage />}>
        <Route element={<LayoutPublic />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<AuthGuard />}>
          <Route element={<LayoutPrivate />}>
            <Route path="account" element={<LayoutAccount />}>
              <Route index element={<AccountGeneral />} />
              <Route path="profile" element={<AccountProfile />} />
              <Route path="password" element={<AccountPassword />} />
            </Route>
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route element={<LayoutInvoice />}>
                <Route path="create" element={<InvoiceCreate />} />
                <Route path=":id" element={<InvoiceView />} />
                <Route path=":id/edit" element={<InvoiceEdit />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

const App = (): React.JSX.Element => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <InvoiceFiltersProvider>
          <PersistProvider>
            <AuthProvider>
              <Toaster />
              <RouterProvider router={router} />
            </AuthProvider>
          </PersistProvider>
        </InvoiceFiltersProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default App;
