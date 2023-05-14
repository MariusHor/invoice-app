import { InvoiceResult } from "src/types/types";
import Status from "./Status";
import arrowRight from "assets/icon-arrow-right.svg";

const Invoice = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceResult): JSX.Element => {
  return (
    <div className="flex justify-between rounded-lg bg-white">
      <div className="m-4 grid w-full grid-cols-2 grid-rows-2 items-center justify-center gap-2 text-center sm:grid-cols-5 sm:grid-rows-none md:gap-4">
        <h3 className="heading-sm">
          <span className="text-secondary-400">#</span>
          {id}
        </h3>
        <span className="paragraph text-secondary-500">{paymentDue}</span>
        <span className="paragraph text-secondary-500">{clientName}</span>
        <h3 className="heading-sm">
          <span>$</span>
          {total}
        </h3>
        <Status status={status} />
      </div>

      <a
        href="/"
        className="min-h-10 grid min-w-10 place-items-center border-l border-l-secondary-300 p-2"
      >
        <img src={arrowRight} alt="open invoice" className="" />
      </a>
    </div>
  );
};

export default Invoice;
