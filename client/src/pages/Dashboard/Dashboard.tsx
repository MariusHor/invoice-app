import { useCallback, useState } from "react";

import { ActionsBar, InvoiceList, Pagination } from "features";
import { InvoiceFallback, Spinner } from "components";
import { useInvoiceFilters, useInvoices } from "hooks";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";
import { INIT_PAGE } from "utils/constants";

export const Dashboard = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);
  const { filters } = useInvoiceFilters();

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

  const { data: invoices, isLoading } = useInvoices();

  if (isLoading) return <Spinner intent={"inner"} />;

  const filteredInvoices = filterInvoices(invoices, filters);
  const totalPages = getTotalPages(filteredInvoices.length);

  let currentInvoices = paginateInvoices(filteredInvoices, currentPage);

  if (currentPage > 1 && !currentInvoices.length) {
    currentInvoices = paginateInvoices(filteredInvoices, currentPage - 1);

    setCurrentPage(currentPage - 1);
  }

  return (
    <>
      <ActionsBar />
      {currentInvoices.length ? (
        <div className="flex w-full grow flex-col justify-center gap-6 p-4">
          <InvoiceList currentInvoices={currentInvoices} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        </div>
      ) : (
        <InvoiceFallback>
          <p className="text-sm-variant mx-auto mt-6 max-w-42 text-center text-skin-muted">
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </InvoiceFallback>
      )}
    </>
  );
};
