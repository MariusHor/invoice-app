import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { VariantProps } from "class-variance-authority";
import { Logo } from "./Logo/Logo";
import { useTheme } from "hooks";
import moon from "assets/icon-moon.svg";
import { HOME_PATH, THEME_PRIMARY, THEME_SECONDARY } from "utils/constants";
import { navbar } from "./styles";

export interface NavbarProps
  extends React.AllHTMLAttributes<HTMLElement>,
    VariantProps<typeof navbar> {}

export const Navbar = ({
  className,
  intent,
  children,
  ...props
}: NavbarProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className={navbar({ intent, className })} {...props}>
      <Link to={HOME_PATH}>
        <Logo intent={intent} />
      </Link>
      <div
        className={`flex grow items-center justify-end ${
          intent === "private" ? "lg:justify-center" : ""
        }`}
      >
        <IconButton
          onClick={() =>
            setTheme(() =>
              theme === THEME_PRIMARY ? THEME_SECONDARY : THEME_PRIMARY
            )
          }
        >
          <img
            src={moon}
            alt="switch theme"
            className="transition-primary hover:-rotate-45"
          />
        </IconButton>
      </div>
      {children}
    </nav>
  );
};
