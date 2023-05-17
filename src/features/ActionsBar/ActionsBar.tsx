import { LinkCustom } from "components";
import { Filters } from "features";
import { useInvoices } from "hooks";
import plusIcon from "assets/icon-plus.svg";

export const ActionsBar = (): React.JSX.Element => {
  const { data } = useInvoices();

  return (
    <div className="max-h-18 container mx-auto mt-4 flex h-fit w-full items-center justify-between gap-4 p-4 lg:p-10">
      <div>
        <h1 className="heading-md">Invoices</h1>
        <p className="heading-md text-primary-600">{data?.length ?? 0}</p>
      </div>
      <Filters />
      <LinkCustom to="/create" title="New">
        <img
          src={plusIcon}
          alt="add new entry"
          className="transition-primary rounded-full bg-secondary-200 p-2 hover:rotate-180"
        />
      </LinkCustom>
    </div>
  );
};