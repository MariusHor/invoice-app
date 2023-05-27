import { Link } from "react-router-dom";
import { InvoiceResult } from "types";
import { InvoiceStatus } from "components";
import arrowRight from "assets/icon-arrow-right.svg";

export const InvoiceCard = ({
  invoice,
}: {
  invoice: InvoiceResult;
}): React.JSX.Element => {
  return (
    <div className="mx-auto flex w-full max-w-sm overflow-hidden rounded-lg bg-skin-fill-secondary text-skin-muted shadow-xl lg:max-w-2xl xl:max-w-4xl">
      <div className="center m-4 w-full grid-cols-2 grid-rows-2 gap-2 text-center xl:grid-cols-5 xl:grid-rows-none">
        <h3 className="heading-sm w-full text-left text-skin-base xl:text-center">
          <span className="text-skin-muted">#</span>
          {invoice.invoiceId}
        </h3>
        <span className={`text-sm w-full text-right xl:text-center`}>
          {invoice.paymentDue}
        </span>
        <span className={`text-sm w-full text-left xl:text-center`}>
          {invoice.clientName}
        </span>
        <h3
          className={`heading-sm w-full text-right text-skin-base xl:text-center`}
        >
          <span>$</span>
          {invoice.total}
        </h3>
        <InvoiceStatus status={invoice.status} />
      </div>
      <div className="grow">
        <Link
          to={`/invoices/${invoice.invoiceId}`}
          className="min-h-10 center h-full min-w-10 border-l border-base p-2 transition-all ease-in-out hover:bg-secondary-200"
        >
          <img src={arrowRight} alt="view invoice" className="" />
        </Link>
      </div>
    </div>
  );
};
