import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { InvoiceFallback } from "components";
import { InvoiceList, Pagination } from "features";
import { useFilters } from "hooks";
import { filterInvoices, getTotalPages, paginateInvoices } from "utils";
import { invoicesLoader } from "./loader";
import { InvoiceResult } from "types";
import { useQuery } from "@tanstack/react-query";
import { invoicesQuery } from "hooks/useInvoices";

export const Invoices = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(6);
  const { filters } = useFilters();
  const initialData: InvoiceResult[] = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;

  const { data: invoices } = useQuery({
    ...invoicesQuery(),
    initialData,
  });

  const handleCurrentPage = useCallback(
    (value: number) => setCurrentPage(value),
    []
  );

  console.log(invoices);

  const filteredInvoices = filterInvoices(invoices, filters);
  const totalPages = getTotalPages(filteredInvoices.length, invoicesPerPage);

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

  return (
    <div className="flex w-full grow flex-col justify-center gap-6 p-4">
      {currentInvoices.length ? (
        <>
          <InvoiceList currentInvoices={currentInvoices} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        </>
      ) : (
        <InvoiceFallback>
          <p className="paragraph-secondary mx-auto mt-6 max-w-42 text-center">
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </InvoiceFallback>
      )}
    </div>
  );
};
