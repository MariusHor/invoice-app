import { toast } from "react-hot-toast";

import { Filters } from "features";
import { ButtonLink } from "components";
import { useAuth, useInvoices } from "hooks";
import plusIcon from "assets/icon-plus.svg";
import { DEMO_MODE_MAX_INVOICES } from "utils/constants";

export const ActionsBar = (): React.JSX.Element => {
  const { auth } = useAuth();
  const { data: invoices } = useInvoices();

  return (
    <div className="center-between container h-fit w-full gap-4 p-4 lg:p-10">
      <div>
        <h1 className="heading-md text-skin-base">Invoices</h1>
        <p className="heading-md text-skin-accent">{invoices?.length ?? 0}</p>
      </div>
      <Filters />
      <ButtonLink
        to="create"
        intent={"primary-link"}
        onClick={() => {
          if (!auth.isLoggedIn && invoices.length >= DEMO_MODE_MAX_INVOICES)
            return toast.error("Only 3 invoices allowed in Demo mode");
        }}
      >
        <div className="flex-center gap-2">
          <img
            width={27}
            height={27}
            src={plusIcon}
            alt="add new entry"
            className="transition-primary hidden rounded-full bg-white p-2 hover:rotate-180 sm:block"
          />
          <span>New</span>
        </div>
      </ButtonLink>
    </div>
  );
};
