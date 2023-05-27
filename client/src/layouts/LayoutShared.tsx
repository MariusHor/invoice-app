import { Outlet } from "react-router-dom";
import { Navbar } from "features";
import { useTheme } from "hooks";

export const LayoutShared = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${
        isDarkTheme ? "bg-secondary-700" : "bg-secondary-200"
      } flex min-h-screen flex-col font-league-spartan lg:grid lg:grid-cols-12 lg:grid-rows-6`}
    >
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden p-4 lg:col-span-11 lg:col-start-2 lg:row-span-full lg:h-screen">
        <Outlet />
      </main>
    </div>
  );
};
