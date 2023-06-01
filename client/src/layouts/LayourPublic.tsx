import { Outlet } from "react-router-dom";
import { Navbar } from "features";
import { useTheme } from "hooks";
import { Button, LinkButton } from "components";

export const LayoutPublic = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } flex min-h-screen flex-col bg-skin-fill font-main`}
    >
      <Navbar intent={"public"}>
        <div className="flex-center gap-2 px-4">
          <LinkButton
            to="login"
            intent={"outlined"}
            className="text-skin-white hover:text-skin-grey"
          >
            Log in
          </LinkButton>
          <LinkButton
            to="register"
            intent={"primary"}
            className="hover:bg-skin-btn-primary-hover"
          >
            Sign up
          </LinkButton>
        </div>
      </Navbar>
      <main className="flex grow flex-col items-center p-4 lg:col-span-11 lg:col-start-2 lg:row-span-full lg:h-screen">
        <Outlet />
      </main>
    </div>
  );
};
