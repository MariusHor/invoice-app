import { ButtonSignout, ButtonLink } from "components";
import { useAuth } from "hooks";

export const NavLinks = (): React.JSX.Element => {
  const {
    auth: { isLoggedIn },
  } = useAuth();

  return (
    <>
      <ButtonLink
        to={isLoggedIn ? "dashboard" : "login"}
        intent={"outlined-link"}
        size={"fixed"}
      >
        {isLoggedIn ? "Dashboard" : "Log In"}
      </ButtonLink>

      {isLoggedIn ? (
        <ButtonSignout />
      ) : (
        <ButtonLink to={"register"} intent={"primary-link"} size={"fixed"}>
          Register
        </ButtonLink>
      )}
    </>
  );
};
