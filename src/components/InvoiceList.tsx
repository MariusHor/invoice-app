import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchInvoices from "src/hooks/fetchInvoices";
import Invoice from "./Invoice";
import ErrorBoundary from "../pages/404";

export interface InvoiceResult {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
}

const InvoiceList: FC = () => {
  const results = useQuery(["invoices"], fetchInvoices);

  if (results.isLoading) {
    return (
      <span className="loader m-4 mx-auto max-w-4xl flex-col gap-4 md:col-span-11 md:col-start-2 md:row-span-5 md:row-start-2"></span>
    );
  }

  return (
    <ul className="m-4 mx-auto flex max-w-4xl flex-col gap-4 md:col-span-11 md:col-start-2 md:row-span-5 md:row-start-2">
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
  );
};

export default function InvoicesErrorBoundary() {
  return (
    <ErrorBoundary>
      <InvoiceList />
    </ErrorBoundary>
  );
}
