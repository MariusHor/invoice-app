import { Link } from "react-router-dom";
import { ReactNode } from "react";

import { InvoiceStatus } from "components";
import { useAuth } from "hooks";
import { InvoiceResult } from "types";
import arrowRight from "assets/icon-arrow-right.svg";

interface InvoiceCardProps {
  invoice: InvoiceResult;
}

export const InvoiceCard = ({
  invoice,
}: InvoiceCardProps): React.JSX.Element => {
  const {
    auth: { isLoggedIn },
  } = useAuth();

  return (
    <div className="mx-auto flex w-full max-w-sm gap-4 overflow-hidden rounded-lg bg-skin-fill-secondary text-skin-muted shadow-xl lg:max-w-2xl xl:max-w-4xl">
      <div className="center m-4 w-full grid-cols-2 grid-rows-2 gap-2 xl:grid-cols-5 xl:grid-rows-none">
        <CardHeading text={invoice.invoiceId} position="left">
          <span className="text-skin-muted">#</span>
        </CardHeading>
        <CardSpan position="end" text={invoice.paymentDue} />
        <CardSpan position="left" text={invoice.clientName} />
        <CardHeading position="end" text={invoice.total}>
          <span>$</span>
        </CardHeading>
        <InvoiceStatus
          intent={invoice.status as "draft" | "paid" | "pending"}
          statusType={invoice.status}
        />
      </div>
      <div className="grow">
        <Link
          to={`/${isLoggedIn ? "dashboard" : "demo"}/${invoice.invoiceId}`}
          className="min-h-10 center h-full min-w-10 border-l border-base p-2 transition-all ease-in-out hover:bg-skin-box"
        >
          <img src={arrowRight} alt="view invoice" className="" />
        </Link>
      </div>
    </div>
  );
};

const CardSpan = ({ text, position }: { text: string; position: string }) => {
  return (
    <span className={`w-full text-${position} text-sm xl:text-center`}>
      {text}
    </span>
  );
};

const CardHeading = ({
  children,
  text,
  position,
}: {
  children: ReactNode;
  text: string | number;
  position: string;
}) => {
  return (
    <h3
      className={`heading-sm w-full text-${position} text-skin-base xl:text-center`}
    >
      {children}
      {text}
    </h3>
  );
};
