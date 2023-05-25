import { Outlet } from "react-router-dom";
import { ActionsBar } from "features";

export const LayoutInvoices = () => {
  return (
    <>
      <ActionsBar />
      <Outlet />
    </>
  );
};
