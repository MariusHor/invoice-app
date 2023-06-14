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
import { AdminPanel } from "pages/AdminPanel/AdminPanel";
import { useEffect } from "react";
import { axiosPublic } from "lib";
import { toast } from "react-hot-toast";

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
              <Route element={<containers.AdminGuard />}>
                <Route path="admin" element={<AdminPanel />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

const App = (): React.JSX.Element => {
  useEffect(() => {
    const checkServerHealth = async () => {
      try {
        await axiosPublic.get("/health");
      } catch (error) {
        console.log(error);
      }
    };

    toast.promise(checkServerHealth(), {
      loading: "Loading the app...",
      success: "App is ready!",
      error: "Error connecting to the server.",
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
