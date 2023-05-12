import { FC } from "react";
import Filters from "./Filter/Filters";
import { ButtonAdd } from "./ButtonAdd";

const Header: FC = () => {
  return (
    <header className="mx-auto mt-4 flex h-fit w-full justify-between gap-2 p-4">
      <div>
        <h1 className="heading-md">Invoices</h1>
        <p className="paragraph text-secondary-500">7 total invoices</p>
      </div>
      <Filters />
      <ButtonAdd />
    </header>
  );
};

export default Header;
