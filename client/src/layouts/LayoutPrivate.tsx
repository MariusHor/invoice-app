import { Outlet } from "react-router-dom";
import { Navbar } from "features";
import { useTheme } from "hooks";
import { Hamburger } from "features/Hamburger";

export const LayoutPrivate = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } flex min-h-screen flex-col bg-skin-fill font-main lg:grid lg:grid-cols-12 lg:grid-rows-6`}
    >
      <Navbar intent={"private"}>
        <Hamburger />
      </Navbar>
      <main className="flex grow flex-col items-center p-4 lg:col-span-11 lg:col-start-2 lg:row-span-full lg:h-screen">
        <Outlet />
      </main>
    </div>
  );
};
