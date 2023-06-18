import { Outlet } from "react-router-dom";

import { Spinner } from "components";
import { SelectNav } from "./SelectNav";
import { AccountHeader } from "./AccountHeader";
import { AccountLinks } from "./AccountLinks";
import { useUser } from "hooks";

export const Account = (): React.JSX.Element => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Spinner intent={"inner"} />;

  return (
    <div className="flex-center w-full max-w-lg grow flex-col gap-10 text-start text-skin-base">
      <AccountHeader username={user.username} />
      <div className="flex w-full flex-col gap-10 md:flex-row">
        <SelectNav classes="md:hidden text-white" />
        <AccountLinks classes="hidden md:flex" />
        <Outlet />
      </div>
    </div>
  );
};
