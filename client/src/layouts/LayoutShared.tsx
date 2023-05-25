import { Outlet } from "react-router-dom";
import { Navbar } from "features";

export const LayoutShared = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden p-4 lg:col-span-11 lg:col-start-2 lg:row-span-full lg:h-screen">
        <Outlet />
      </main>
    </>
  );
};
