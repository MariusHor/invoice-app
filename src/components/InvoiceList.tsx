import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchInvoices from "src/hooks/fetchInvoices";
import Invoice from "./Invoice";

export interface InvoiceResult {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
}

export const InvoiceList: FC = () => {
  const results = useQuery(["invoices"], fetchInvoices);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
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
