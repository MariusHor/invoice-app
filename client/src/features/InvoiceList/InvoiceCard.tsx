import { Link } from "react-router-dom";
import { InvoiceResult } from "types";
import { InvoiceStatus } from "components";
import arrowRight from "assets/icon-arrow-right.svg";
import { useTheme } from "hooks";

export const InvoiceCard = ({
  invoice,
}: {
  invoice: InvoiceResult;
}): React.JSX.Element => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${
        isDarkTheme ? "bg-secondary-600" : "bg-white"
      } mx-auto flex w-full max-w-sm justify-between overflow-hidden rounded-lg shadow-xl lg:max-w-2xl xl:max-w-4xl`}
    >
      <div className="m-4 grid w-full grid-cols-2 grid-rows-2 items-center justify-center gap-2 text-center xl:grid-cols-5 xl:grid-rows-none">
        <h3
          className={`heading-sm text-left xl:text-center  ${
            isDarkTheme ? "text-white" : ""
          }`}
        >
          <span className="paragraph">#</span>
          {invoice.invoiceId}
        </h3>
        <span
          className={`paragraph text-right xl:text-center ${
            isDarkTheme ? "text-secondary-300" : ""
          }`}
        >
          {invoice.paymentDue}
        </span>
        <span
          className={`paragraph text-left xl:text-center  ${
            isDarkTheme ? "text-secondary-300" : ""
          }`}
        >
          {invoice.clientName}
        </span>
        <h3
          className={`heading-sm text-right xl:text-center ${
            isDarkTheme ? "text-white" : ""
          }`}
        >
          <span>$</span>
          {invoice.total}
        </h3>
        <InvoiceStatus status={invoice.status} />
      </div>

      <Link
        to={`/invoices/${invoice.invoiceId}`}
        className={`${
          isDarkTheme
            ? "border-l-secondary-100 hover:bg-secondary-500"
            : "border-l-secondary-300 hover:bg-secondary-200"
        } min-h-10 grid min-w-10 place-items-center border-l p-2 transition-all ease-in-out hover:bg-secondary-200`}
      >
        <img src={arrowRight} alt="open invoice" className="" />
      </Link>
    </div>
  );
};
