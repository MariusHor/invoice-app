import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "features";
import { useTheme } from "hooks";
import { Hamburger } from "features/Hamburger";
import { LinkButton } from "components";

export const LayoutPublic = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } flex min-h-screen flex-col bg-skin-fill font-main`}
    >
      <Navbar intent={"public"}>
        <div className="md:hidden">
          <Hamburger />
        </div>
        <div className="md:flex-center hidden gap-4">
          <LinkButton
            to={pathname === "/" ? "login" : "/"}
            intent={"outlined"}
            size={"fixed"}
            className="hover:text-skin-grey"
          >
            {pathname === "/" ? "Log In" : "Home"}
          </LinkButton>

          <LinkButton
            to={pathname === "/register" ? "login" : "register"}
            intent={"primary"}
            size={"fixed"}
            className="hover:bg-skin-btn-primary-hover"
          >
            {pathname === "/register" ? "Log in" : "Register"}
          </LinkButton>
        </div>
      </Navbar>
      <main className="flex grow flex-col items-center p-4">
        <Outlet />
      </main>
    </div>
  );
};
