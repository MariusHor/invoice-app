import { useLocation } from "react-router-dom";
import { LinkButton } from "./Button/Link";

interface NavLinksProps {
  handleClose?: () => void;
}

export const NavLinks = ({ handleClose }: NavLinksProps): React.JSX.Element => {
  const { pathname } = useLocation();
  return (
    <>
      <LinkButton
        onClick={handleClose}
        to={pathname === "/" ? "login" : "/"}
        intent={"outlined"}
        size={"fixed"}
        className="hover:text-skin-grey"
      >
        {pathname === "/" ? "Log In" : "Home"}
      </LinkButton>

      <LinkButton
        onClick={handleClose}
        to={pathname === "/register" ? "login" : "register"}
        intent={"primary"}
        size={"fixed"}
        className="hover:bg-skin-btn-primary-hover"
      >
        {pathname === "/register" ? "Log in" : "Register"}
      </LinkButton>
    </>
  );
};
