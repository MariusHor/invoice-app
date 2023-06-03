import { LinkButton } from "./Button/Link";
import { useAuth } from "hooks";
import { ButtonSignout } from "./Button/ButtonSignout";

export const NavLinks = (): React.JSX.Element => {
  const { auth } = useAuth();
  const isLoggedIn = "accessToken" in auth;

  return (
    <>
      <LinkButton
        to={isLoggedIn ? "dashboard" : "login"}
        intent={"outlined"}
        size={"fixed"}
        className="hover:text-skin-grey"
      >
        {isLoggedIn ? "Dashboard" : "Log In"}
      </LinkButton>

      {isLoggedIn ? (
        <ButtonSignout />
      ) : (
        <LinkButton
          to={"register"}
          intent={"primary"}
          size={"fixed"}
          className="hover:bg-skin-btn-primary-hover"
        >
          Register
        </LinkButton>
      )}
    </>
  );
};
