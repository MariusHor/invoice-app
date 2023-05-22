import { Outlet } from "react-router-dom";
import arrowLeft from "assets/icon-arrow-left.svg";
import { ButtonNavigateBack } from "components";

export const LayoutInvoice = () => {
  return (
    <>
      <div className="container mx-auto h-fit w-full p-4 lg:p-10">
        <ButtonNavigateBack title="Go back">
          <div className="mr-2">
            <img src={arrowLeft} alt="" />
          </div>
        </ButtonNavigateBack>
      </div>
      <Outlet />
    </>
  );
};
