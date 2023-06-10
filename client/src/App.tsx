import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import * as layouts from "layouts";
import * as containers from "containers";
import * as pages from "pages";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<containers.Toaster />}>
      <Route path="/" errorElement={<pages.Errors />}>
        <Route element={<containers.PersistLogin />}>
          <Route element={<layouts.Public />}>
            <Route index element={<pages.Home />} />
            <Route path="login" element={<pages.Login />} />
            <Route path="register" element={<pages.Register />} />
            <Route element={<containers.DemoGuard />}>
              <Route path="demo/*" element={<pages.Demo />} />
            </Route>
          </Route>

          <Route element={<containers.AuthGuard />}>
            <Route element={<layouts.Private />}>
              <Route path="account" element={<layouts.Account />}>
                <Route index element={<pages.AccountGeneral />} />
                <Route path="profile" element={<pages.AccountProfile />} />
                <Route path="password" element={<pages.AccountPassword />} />
              </Route>
              <Route path="dashboard">
                <Route index element={<pages.Dashboard />} />
                <Route element={<layouts.Invoice />}>
                  <Route path="create" element={<pages.InvoiceCreate />} />
                  <Route path=":id" element={<pages.InvoiceView />} />
                  <Route path=":id/edit" element={<pages.InvoiceEdit />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

const App = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
