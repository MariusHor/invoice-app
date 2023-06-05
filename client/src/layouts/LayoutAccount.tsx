import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Avatar, LinkButton, Spinner } from "components";
import { capitalize } from "utils";
import { useUser } from "hooks/useInvoices";

export const LayoutAccount = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Spinner intent={"inner"} />;

  const paths = {
    "/account": "General",
    profile: "Edit Profile",
    password: "Password",
  };

  return (
    <div className="mt-20 flex grow flex-col gap-10 text-start">
      <AccountHeader username={user.username} />
      <div className="flex gap-10">
        <ul className="flex w-20 flex-col gap-3">
          {Object.entries(paths).map((entry) => (
            <li key={`path: ${entry[0]}`}>
              <NavLink to={entry[0]} end>
                {entry[1]}
              </NavLink>
            </li>
          ))}
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
    case "account/profile":
      title = "Edit Profile";
      break;
    case "account/password":
      title = "Password";
      break;
    default:
      title = "General";
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
        <LinkButton
          to="/subscribe"
          intent={"outlined-link"}
          className="border-slate-300"
        >
          Go PRO
        </LinkButton>
      </div>
    </div>
  );
};
