import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Avatar } from "components";
import { Logo } from "./Logo";
import moon from "assets/icon-moon.svg";
import { useTheme } from "hooks";

export const Navbar = (): React.JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex h-16 justify-between gap-6 bg-skin-static lg:row-span-6 lg:min-h-screen lg:w-20 lg:flex-col lg:rounded-r-3xl">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex grow items-center justify-end lg:justify-center">
        <IconButton
          onClick={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
        >
          <img
            src={moon}
            alt="switch theme"
            className="transition-primary hover:-rotate-45"
          />
        </IconButton>
      </div>
      <Link
        to="/user-dashboard"
        className="center w-20 border-l border-l-secondary-550 lg:h-20 lg:border-t lg:border-t-secondary-550"
      >
        <Avatar />
      </Link>
    </nav>
  );
};
