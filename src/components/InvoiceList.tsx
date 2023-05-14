import { useQuery } from "@tanstack/react-query";
import fetchInvoices from "src/api/fetchInvoices";
import Invoice from "./Invoice";
import { InvoiceResult } from "src/types/types";
import { InvoiceListFallback } from "./InvoiceListFallback";

const InvoiceList = (): JSX.Element => {
  const results = useQuery(["invoices"], fetchInvoices);

  if (results.isLoading) {
    return (
      <span className="loader m-4 mx-auto max-w-4xl flex-col gap-4 lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-2"></span>
    );
  }

  return results.data.length ? (
    <ul className="m-4 mx-auto flex max-w-4xl flex-col gap-4 lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-2">
      {results.data.map((result: InvoiceResult) => (
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
