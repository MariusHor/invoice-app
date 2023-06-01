import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ActionsBar, InvoiceList, Pagination } from "features";
import { InvoiceFallback } from "components";
import { useFilters, useInvoices, useFilterInvoices } from "hooks";
import { InvoiceResult } from "types";
import { invoicesLoader } from "./loader";

export const Dashboard = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);
  const { filters } = useFilters();
  const initialData: InvoiceResult[] = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;

  const { data: invoices } = useInvoices({ initialData });

  const { totalPages, currentInvoices } = useFilterInvoices({
    invoices,
    filters,
    invoicesPerPage,
    currentPage,
    setCurrentPage,
  });

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

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
          <p className="paragraph-secondary mx-auto mt-6 max-w-42 text-center">
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </InvoiceFallback>
      )}
    </>
  );
};
