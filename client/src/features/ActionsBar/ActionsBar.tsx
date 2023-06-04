import { Filters } from "features";
import { LinkButton } from "components";
import { useInvoices } from "hooks";
import plusIcon from "assets/icon-plus.svg";

export const ActionsBar = (): React.JSX.Element => {
  const { data: invoices } = useInvoices();

  return (
    <div className="center-between container h-fit w-full gap-4 p-4 lg:p-10">
      <div>
        <h1 className="heading-md text-skin-base">Invoices</h1>
        <p className="heading-md text-skin-accent">{invoices?.length ?? 0}</p>
      </div>
      <Filters />
      <LinkButton to="/dashboard/create" intent={"primary-link"}>
        <div className="flex-center gap-2">
          <img
            src={plusIcon}
            alt="add new entry"
            className="transition-primary hidden rounded-full bg-white p-2 hover:rotate-180 sm:block"
          />
          <span>New</span>
        </div>
      </LinkButton>
    </div>
  );
};
