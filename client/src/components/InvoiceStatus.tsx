import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { capitalize } from "utils";
import { InvoiceStatusClasses } from "types";

interface InvoiceStatusProps {
  status: string | undefined;
}

export const InvoiceStatus = ({
  status,
}: InvoiceStatusProps): React.JSX.Element => {
  if (status === undefined) status = "pending";

  const classes: InvoiceStatusClasses = {
    paid: {
      div: "bg-green-100",
      header: "text-green-500",
    },
    pending: {
      div: "bg-orange-100",
      header: "text-orange-600",
    },
    draft: {
      div: "bg-grey-100",
      header: "text-grey-600",
    },
  };

  return (
    <div
      className={`col-span-2 flex w-full max-w-xs items-center justify-center justify-self-center rounded-lg p-2 text-center xl:col-span-1 ${classes[status].div}`}
    >
      <h3 className={`heading-sm ${classes[status].header}`}>
        <FiberManualRecordIcon style={{ fontSize: 12 }} />
        <span className="ml-2">{capitalize(status)}</span>
      </h3>
    </div>
  );
};
