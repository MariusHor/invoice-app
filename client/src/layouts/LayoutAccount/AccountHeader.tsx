import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Avatar, ButtonLink } from "components";
import { capitalize } from "utils";
import { ACCOUNT_ROUTES_CONFIG } from "utils/constants";

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
    const config = ACCOUNT_ROUTES_CONFIG[path];

    setTitle(config.title);
    setPhrase(config.phrase);
  }, [location.pathname]);

  return (
    <div className="flex w-full items-center justify-between gap-20">
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
        <ButtonLink to="/subscribe" intent={"outlined-link"}>
          Go PRO
        </ButtonLink>
      </div>
    </div>
  );
};
