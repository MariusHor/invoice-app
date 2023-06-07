import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Avatar, LinkButton, Spinner } from "components";
import { useUser } from "hooks";
import { capitalize } from "utils";

export const LayoutAccount = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Spinner intent={"inner"} />;

  const paths = {
    "/account": "General",
    profile: "Edit Profile",
    password: "Password",
  };

  return (
    <div className="mt-20 flex w-full max-w-lg grow flex-col gap-10 text-start">
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
  const [title, setTitle] = useState("");
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    switch (location.pathname.slice(1)) {
      case "account/profile":
        setTitle("Edit Profile");
        setPhrase("Set up your Paperless presence");
        break;
      case "account/password":
        setTitle("Password");
        setPhrase("Manage your password");
        break;
      default:
        setTitle("General");
        setPhrase("Update your username and email");
    }
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-between gap-20">
      <div className="flex-center gap-6 text-start">
        <Avatar />
        <div className="grow">
          <div>
            <h1 className="heading-lg font-bold">
              {capitalize(username ?? "")} / {title}
            </h1>
          </div>
          <p className="text-skin-muted">{phrase}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <LinkButton to="/subscribe" intent={"outlined-link"}>
          Go PRO
        </LinkButton>
      </div>
    </div>
  );
};
