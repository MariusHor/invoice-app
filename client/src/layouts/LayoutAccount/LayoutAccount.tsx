import { Outlet } from "react-router-dom";

import { Spinner } from "components";
import { SelectNav } from "./SelectNav";
import { AccountHeader } from "./AccountHeader";
import { useUser } from "hooks";
import { AccountLinks } from "./AccountLinks";

export const LayoutAccount = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Spinner intent={"inner"} />;

  return (
    <div className="flex-center w-full max-w-lg grow flex-col gap-10 text-start">
      <AccountHeader username={user.username} />
      <div className="flex w-full flex-col gap-10 md:flex-row">
        <SelectNav classes="md:hidden" />
        <AccountLinks classes="hidden md:flex" />
        <Outlet />
      </div>
    </div>
  );
};
