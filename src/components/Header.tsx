import { Filters } from "./Filters";
import { ButtonAdd } from "./ButtonAdd";
import { useInvoices } from "hooks/useInvoices";

const Header = (): React.JSX.Element => {
  const { data } = useInvoices();

  return (
    <header className="max-h-18 container m-6 mx-auto flex h-fit w-full items-center justify-between gap-4 p-4 lg:col-span-11">
      <div>
        <h1 className="heading-md">Invoices</h1>
        <p className="heading-md text-primary-600">{data?.length ?? 0}</p>
      </div>
      <Filters />
      <ButtonAdd />
    </header>
  );
};

export default Header;
