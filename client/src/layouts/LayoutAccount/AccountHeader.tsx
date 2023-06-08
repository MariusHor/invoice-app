import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Avatar, LinkButton } from "components";
import { capitalize } from "utils";

const routeConfig: RouteConfig = {
  "account/profile": {
    title: "Edit Profile",
    phrase: "Set up your Paperless presence",
  },
  "account/password": {
    title: "Password",
    phrase: "Manage your password",
  },
  account: {
    title: "General",
    phrase: "Update your username and email",
  },
};

interface RouteConfig {
  [key: string]: {
    title: string;
    phrase: string;
  };
}

interface AccountHeaderProps {
  username: string;
}

export const AccountHeader = ({
  username,
}: AccountHeaderProps): React.JSX.Element => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const path = location.pathname.slice(1);
    const config = routeConfig[path];

    setTitle(config.title);
    setPhrase(config.phrase);
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
