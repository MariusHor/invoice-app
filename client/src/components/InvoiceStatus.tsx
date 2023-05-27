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
      div: "bg-skin-green",
      header: "text-skin-green",
    },
    pending: {
      div: "bg-skin-orange",
      header: "text-skin-orange",
    },
    draft: {
      div: "bg-skin-grey",
      header: "text-skin-grey",
    },
  };

  return (
    <div
      className={`center col-span-2 w-fit justify-self-center rounded-lg px-4 py-2 xl:col-span-1 ${classes[status].div}`}
    >
      <h3 className={`heading-sm ${classes[status].header}`}>
        <FiberManualRecordIcon style={{ fontSize: 12 }} />
        <span className="ml-2">{capitalize(status)}</span>
      </h3>
    </div>
  );
};
