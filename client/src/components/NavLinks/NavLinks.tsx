import { LinkButton } from "../Button/Link";
import { ButtonSignout } from "../Button/ButtonSignout";
import { useAuth } from "hooks";

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
