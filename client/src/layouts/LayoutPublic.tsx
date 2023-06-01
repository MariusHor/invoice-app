import { Outlet } from "react-router-dom";
import { Navbar } from "features";
import { useTheme } from "hooks";
import { Hamburger } from "features/Hamburger";
import { NavLinks } from "components";

export const LayoutPublic = () => {
  const { theme } = useTheme();

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
          <NavLinks />
        </div>
      </Navbar>
      <main className="flex grow flex-col items-center p-4">
        <Outlet />
      </main>
    </div>
  );
};
