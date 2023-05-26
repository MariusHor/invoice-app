import { InvoiceResult } from "types";
import { InvoiceCard } from "./InvoiceCard";

export const InvoiceList = ({
  currentInvoices,
}: {
  currentInvoices: InvoiceResult[];
}): React.JSX.Element => {
  return (
    <ul className="row-span-5 flex flex-col gap-4 sm:grid sm:grid-cols-2 ">
      {currentInvoices.map((result: InvoiceResult) => (
        <InvoiceCard key={result._id} invoice={result} />
      ))}
    </ul>
  );
};
