import { LinkButton } from "./Button/Link";
import { useAuth } from "hooks";
import { ButtonSignout } from "./Button/ButtonSignout";

export const NavLinks = (): React.JSX.Element => {
  const {
    auth: { isLoggedIn },
  } = useAuth();

  return (
    <>
      <LinkButton
        to={isLoggedIn ? "dashboard" : "login"}
        intent={"outlined-link"}
        size={"fixed"}
      >
        {isLoggedIn ? "Dashboard" : "Log In"}
      </LinkButton>

      {isLoggedIn ? (
        <ButtonSignout />
      ) : (
        <LinkButton to={"register"} intent={"primary-link"} size={"fixed"}>
          Register
        </LinkButton>
      )}
    </>
  );
};
