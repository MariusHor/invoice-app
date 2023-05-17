import { ButtonNavigateBack } from "components";
import { Outlet } from "react-router-dom";

export const LayoutInvoice = () => {
  return (
    <>
      <div className="container mx-auto mt-4 h-fit w-full p-4 lg:p-10">
        <ButtonNavigateBack />
      </div>
      <Outlet />
    </>
  );
};
