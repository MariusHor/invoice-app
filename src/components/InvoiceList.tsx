import Invoice from "./Invoice";
import { InvoiceResult } from "src/types/types";
import { InvoiceListFallback } from "./InvoiceListFallback";
import { useInvoices } from "src/hooks/useInvoices";
import Spinner from "./Spinner";

const InvoiceList = (): JSX.Element => {
  const invoices = useInvoices();

  if (invoices.isLoading) {
    return <Spinner />;
  }

  return invoices.data.length ? (
    <ul className="m-4 mx-auto flex max-w-4xl flex-col gap-4 lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-2">
      {invoices.data.map((result: InvoiceResult) => (
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
