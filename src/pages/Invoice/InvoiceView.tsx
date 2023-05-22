import { useLoaderData, useParams } from "react-router-dom";
import { InvoiceStatus } from "components";
import { InvoiceDetails } from "features/Invoices/InvoiceDetails";
import { invoicesLoader } from "pages";
import { InvoiceResult } from "types";

export const InvoiceView = () => {
  const { id } = useParams();
  const invoices = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;

  const invoice = invoices.find((item: InvoiceResult) => item.id === id);

  return (
    <div className="flex w-full max-w-3xl flex-col justify-between gap-4">
      <div className="flex items-center justify-between gap-24 rounded-lg bg-white p-7">
        <span className="paragraph">Status</span>
        <InvoiceStatus status={invoice.status} />
      </div>
      <InvoiceDetails invoice={invoice} id={id} />
      <div className="flex h-20 items-center justify-center gap-2 bg-white p-6 lg:rounded-lg">
        {/* <ButtonActions
          title={"Edit"}
          classes="bg-secondary-200 text-secondary-500"
        />
        <ButtonActions title={"Delete"} classes="bg-accent-500 text-white" />
        <ButtonActions title={"Paid"} classes="bg-primary-600 text-white" /> */}
      </div>
    </div>
  );
};
