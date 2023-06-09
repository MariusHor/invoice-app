import { Outlet } from "react-router-dom";
import { ButtonBack } from "components";
import arrowLeft from "assets/icon-arrow-left.svg";

export const Invoice = (): React.JSX.Element => {
  return (
    <>
      <div className="container mx-auto h-fit w-full py-4 lg:p-10">
        <ButtonBack>
          <div className="flex-center">
            <div className="mr-2">
              <img src={arrowLeft} alt="" width={7} height={10} />
            </div>
            <span>Go back</span>
          </div>
        </ButtonBack>
      </div>
      <Outlet />
    </>
  );
};
