import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "hooks";
import { Avatar, LinkButton } from "components";
import { capitalize } from "utils";

export const LayoutAccount = () => {
  const {
    auth: { username },
  } = useAuth();

  return (
    <div className="mt-20 flex grow flex-col gap-10 text-center">
      <AccountHeader username={username ?? "User"} />
      <div>
        <ul className="flex w-20 flex-col gap-3">
          <li>
            <NavLink to={"/account"} end>
              General
            </NavLink>
          </li>
          <li>
            <NavLink to={"profile"} end>
              Edit Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"password"} end>
              Password
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export const AccountHeader = ({
  username,
}: {
  username: string;
}): React.JSX.Element => {
  const location = useLocation();
  let title = "";

  switch (location.pathname.slice(1)) {
    case "account":
      title = "General";
      break;
    case "account/password":
      title = "Password";
      break;
    default:
      title = "Edit Profile";
  }

  return (
    <div className="flex items-center justify-between gap-20">
      <div className="flex-center gap-6 text-start">
        <Avatar />
        <div>
          <div>
            <h1 className="heading-lg font-bold">
              {capitalize(username)} / {title}
            </h1>
          </div>
          <p className="text-skin-muted">
            Update your username and manage your account
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <LinkButton to="/subscribe" intent={"primary-link"}>
          Go PRO
        </LinkButton>
      </div>
    </div>
  );
};
