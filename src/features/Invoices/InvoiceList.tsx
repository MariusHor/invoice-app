import { InvoiceResult } from "types";
import { Invoice } from "./Invoice";

export const InvoiceList = ({
  currentInvoices,
}: {
  currentInvoices: InvoiceResult[];
}): React.JSX.Element => {
  return (
    <ul className="row-span-5 flex flex-col gap-4 sm:grid sm:grid-cols-2 ">
      {currentInvoices.map((result: InvoiceResult) => (
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