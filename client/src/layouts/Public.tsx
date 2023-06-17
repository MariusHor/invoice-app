import { Outlet } from "react-router-dom";

import { Navbar, Hamburger, NavLinks } from "features";
import { useAuth, useTheme } from "hooks";

export const Public = (): React.JSX.Element => {
  const { theme } = useTheme();
  const {
    auth: { isLoggedIn },
  } = useAuth();

  return (
    <div
      className={`${theme} flex min-h-screen flex-col bg-skin-fill font-main`}
    >
      <Navbar intent={"public"}>
        <div className={!isLoggedIn ? "md:hidden" : ""}>
          <Hamburger />
        </div>
        <div className={isLoggedIn ? "hidden" : "md:flex-center hidden gap-4 "}>
          <NavLinks />
        </div>
      </Navbar>
      <main className="flex grow flex-col items-center p-4">
        <Outlet context={{ isLoggedIn }} />
      </main>
    </div>
  );
};
