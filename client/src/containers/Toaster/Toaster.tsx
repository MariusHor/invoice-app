import { Toaster as ToasterComponent } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const Toaster = () => {
  return (
    <>
      <ToasterComponent />
      <Outlet />
    </>
  );
};
