import Avatar from "./Avatar";
import ThemeSwitch from "./ThemeSwitch";
import logo from "assets/logo.svg";

const Navbar = (): JSX.Element => {
  return (
    <nav className="flex h-16 justify-between overflow-hidden bg-secondary-600 lg:row-span-6 lg:min-h-screen lg:w-20 lg:flex-col lg:rounded-r-3xl">
      <div className="relative grid w-18 place-items-center overflow-hidden rounded-r-3xl bg-primary-600 lg:h-20 lg:w-full">
        <div className="h-full w-full"></div>
        <div className="h-full w-full rounded-tl-3xl bg-primary-400"></div>
        <img
          src={logo}
          alt="invoice app logo"
          className="transition-primary absolute h-7 w-7 hover:rotate-45"
        />
      </div>
      <div className="flex grow items-center justify-end px-6 lg:justify-center">
        <ThemeSwitch />
      </div>
      <div className="grid w-20 place-items-center border-l border-l-secondary-550 lg:h-20 lg:border-t lg:border-t-secondary-550">
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
