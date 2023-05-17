import { Link } from "react-router-dom";
import { Button, Avatar } from "components";
import { Logo } from "./Logo";
import moon from "assets/icon-moon.svg";

export const Navbar = (): React.JSX.Element => {
  return (
    <nav className="flex h-16 justify-between overflow-hidden bg-secondary-600 lg:row-span-6 lg:min-h-screen lg:w-20 lg:flex-col lg:rounded-r-3xl">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex grow items-center justify-end px-6 lg:justify-center">
        <Button>
          <img
            src={moon}
            alt="switch theme"
            className="transition-primary hover:-rotate-45"
          />
        </Button>
      </div>
      <Link
        to="/user-dashboard"
        className="grid w-20 place-items-center border-l border-l-secondary-550 lg:h-20 lg:border-t lg:border-t-secondary-550"
      >
        <Avatar />
      </Link>
    </nav>
  );
};
