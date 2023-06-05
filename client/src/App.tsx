import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  AuthProvider,
  ReactQueryProvider,
  FiltersProvider,
  ThemeProvider,
  PersistProvider,
} from "providers";
import {
  LayoutInvoice,
  LayoutPrivate,
  LayoutPublic,
  LayoutAccount,
} from "layouts";

import {
  ErrorPage,
  InvoiceEdit,
  InvoiceCreate,
  InvoiceView,
  Dashboard,
  Home,
  Login,
  Register,
  AuthGuard,
  PersistLogin,
  AccountGeneral,
} from "pages";

import "./App.css";
import { AccountProfile } from "pages/Account/AccountProfile";
import { AccountPassword } from "pages/Account/AccountPassword";

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
        <FiltersProvider>
          <PersistProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </PersistProvider>
        </FiltersProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default App;
