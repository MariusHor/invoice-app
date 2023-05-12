import { FC } from "react";
import logo from "assets/logo.svg";

const Navbar: FC = () => {
  return (
    <div className="flex bg-secondary-600">
      <div className="relative flex h-18 w-18 flex-col items-center justify-center overflow-hidden rounded-r-3xl bg-primary-600 ">
        <div className="h-full w-full"></div>
        <div className="h-full w-full rounded-tl-3xl bg-primary-400"></div>
        <img src={logo} alt="invoice app logo" className="absolute h-7 w-7" />
      </div>
    </div>
  );
};

export default Navbar;
