import { Navbar } from "features";
import { Outlet } from "react-router-dom";

export const LayoutShared = () => {
  return (
    <>
      <Navbar />
      <main className="flex grow flex-col lg:col-span-11 lg:col-start-2 lg:row-span-full">
        <Outlet />
      </main>
    </>
  );
};
