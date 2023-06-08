import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { VariantProps, cva } from "class-variance-authority";
import { Logo } from "./Logo";
import { useTheme } from "hooks";
import moon from "assets/icon-moon.svg";
import { THEME_PRIMARY, THEME_SECONDARY } from "utils/constants";

const navbar = cva("flex h-fit justify-between gap-6 ", {
  variants: {
    intent: {
      private: [
        "lg:row-span-6 lg:flex-col",
        "lg:min-h-screen lg:w-20",
        "lg:rounded-r-3xl bg-skin-static",
      ],
      public: ["container mx-auto py-2"],
    },
    defaultVariants: {
      intent: "public",
    },
  },
});

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
      <Link to="/">
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
