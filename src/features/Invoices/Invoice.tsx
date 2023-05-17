import { Link } from "react-router-dom";
import { InvoiceResult } from "types";
import { InvoiceStatus } from "./InvoiceStatus";
import arrowRight from "assets/icon-arrow-right.svg";

export const Invoice = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceResult): React.JSX.Element => {
  return (
    <div className="mx-auto flex w-full max-w-sm justify-between rounded-lg bg-white lg:max-w-2xl xl:max-w-4xl">
      <div className="m-4 grid w-full grid-cols-2 grid-rows-2 items-center justify-center gap-2 text-center xl:grid-cols-5 xl:grid-rows-none ">
        <h3 className="heading-sm">
          <span className="paragraph">#</span>
          {id}
        </h3>
        <span className="paragraph">{paymentDue}</span>
        <span className="paragraph">{clientName}</span>
        <h3 className="heading-sm">
          <span>$</span>
          {total}
        </h3>
        <InvoiceStatus status={status} />
      </div>

      <Link
        to={`/invoice/${id}`}
        className="min-h-10 grid min-w-10 place-items-center border-l border-l-secondary-300 p-2"
      >
        <img src={arrowRight} alt="open invoice" className="" />
      </Link>
    </div>
  );
};