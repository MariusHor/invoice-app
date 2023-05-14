import Invoice from "./Invoice";
import { InvoiceResult } from "src/types/types";
import { InvoiceListFallback } from "./InvoiceListFallback";
import { useInvoices } from "src/hooks/useInvoices";
import Spinner from "./Spinner";
import { useContext } from "react";
import { FiltersContext } from "src/context/filters";

const InvoiceList = (): JSX.Element => {
  const invoices = useInvoices();
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("FilterContext must be used within a FilterProvider");
  }

  const { filters } = context;

  if (invoices.isLoading) {
    return <Spinner />;
  }

  const filteredInvoices = invoices.data.filter((invoice: InvoiceResult) => {
    switch (invoice.status) {
      case "paid":
        return filters.paid;
      case "pending":
        return filters.pending;
      case "draft":
        return filters.draft;
      default:
        return false;
    }
  });

  return filteredInvoices.length ? (
    <ul className="m-4 mx-auto flex max-w-4xl flex-col gap-4 lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-2">
      {filteredInvoices.map((result: InvoiceResult) => (
        <Invoice
          key={result.id}
          id={result.id}
          paymentDue={result.paymentDue}
          clientName={result.clientName}
          total={result.total}
          status={result.status}
        />
      ))}
    </ul>
  ) : (
    <InvoiceListFallback />
  );
};

export default InvoiceList;
