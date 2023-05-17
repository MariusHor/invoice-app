import { ButtonNavigateBack } from "components";
import { Outlet } from "react-router-dom";

export const LayoutInvoice = () => {
  return (
    <div className="mx-auto mt-12 flex w-full max-w-4xl flex-col gap-6 p-4 lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-1">
      <ButtonNavigateBack />
      <Outlet />
    </div>
  );
};
