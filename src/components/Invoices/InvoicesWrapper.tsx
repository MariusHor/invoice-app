import { useCallback, useContext, useState } from "react";
import { useInvoices } from "hooks/useInvoices";
import { FiltersContext } from "context/filters";
import { Spinner, Navigation } from "components";
import InvoiceListFallback from "./InvoiceListFallback";
import InvoiceList from "./InvoiceList";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils/utils";

const Invoices = (): React.JSX.Element => {
  const invoices = useInvoices();
  const context = useContext(FiltersContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

  if (invoices.isLoading) {
    return <Spinner />;
  }

  if (!context) {
    throw new Error("FiltersContext must be used within a FilterProvider");
  }

  const { filters } = context;

  const filteredInvoices = filterInvoices(invoices.data, filters);

  let currentInvoices = paginateInvoices(
    filteredInvoices,
    currentPage,
    invoicesPerPage
  );

  if (currentPage > 1 && !currentInvoices.length) {
    currentInvoices = paginateInvoices(
      filteredInvoices,
      currentPage - 1,
      invoicesPerPage
    );

    setCurrentPage(currentPage - 1);
  }

  const totalPages = getTotalPages(filteredInvoices.length, invoicesPerPage);

  if (!currentInvoices.length) {
    return <InvoiceListFallback />;
  }

  return (
    <div className="flex w-full flex-col gap-6 p-4 lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-3">
      <InvoiceList currentInvoices={currentInvoices} />
      <Navigation
        totalPages={totalPages}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
};

export default Invoices;
