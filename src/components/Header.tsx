import { Filters } from "./Filters";
import { ButtonAdd } from "./ButtonAdd";

const Header = (): JSX.Element => {
  return (
    <header className="max-h-18 container mx-auto mt-6 flex h-fit w-full items-center justify-between gap-4 p-4 lg:col-span-11">
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
