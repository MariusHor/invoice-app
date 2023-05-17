import { ActionsBar } from "features";
import { Outlet } from "react-router-dom";

export const LayoutInvoices = () => {
  return (
    <>
      <ActionsBar />
      <Outlet />
    </>
  );
};
