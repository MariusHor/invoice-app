import { FC } from "react";
import Avatar from "./Avatar";
import ThemeSwitch from "./ThemeSwitch";
import logo from "assets/logo.svg";

const Navbar: FC = () => {
  return (
    <nav className="flex h-18 justify-between overflow-hidden bg-secondary-600 md:h-full md:flex-col md:rounded-r-3xl">
      <div className="relative grid w-18 place-items-center overflow-hidden rounded-r-3xl bg-primary-600 md:h-20 md:w-full">
        <div className="h-full w-full"></div>
        <div className="h-full w-full rounded-tl-3xl bg-primary-400"></div>
        <img
          src={logo}
          alt="invoice app logo"
          className="transition-primary absolute h-7 w-7 hover:rotate-45"
        />
      </div>
      <div className="flex grow items-center justify-end px-6 md:justify-center">
        <ThemeSwitch />
      </div>
      <div className="grid w-20 place-items-center border border-l-secondary-550 md:h-20 md:border-t-secondary-550">
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
