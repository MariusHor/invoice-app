import Filters from "./Filter/Filters";
import { ButtonAdd } from "./ButtonAdd";

const Header = (): JSX.Element => {
  return (
    <header className="max-h-18 container mx-auto mt-4 flex h-fit w-full items-center justify-between gap-2 p-4 md:col-span-11">
      <div>
        <h1 className="heading-md">Invoices</h1>
        <p className="heading-md text-primary-600">7</p>
      </div>
      <Filters />
      <ButtonAdd />
    </header>
  );
};

export default Header;
