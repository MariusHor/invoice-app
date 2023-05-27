import { Outlet } from "react-router-dom";
import { ActionsBar } from "features";

export const LayoutDashboard = () => {
  return (
    <>
      <ActionsBar />
      <Outlet />
    </>
  );
};
