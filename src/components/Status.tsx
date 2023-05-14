import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { capitalize } from "src/utils/utils";
import { StatusClasses } from "src/types/types";

interface StatusProps {
  status: string;
}

const Status = ({ status }: StatusProps): JSX.Element => {
  const classes: StatusClasses = {
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
      className={`col-span-2 flex w-full max-w-xs items-center justify-center justify-self-center rounded-lg p-2 text-center sm:col-span-1 ${classes[status].div}`}
    >
      <h3 className={`heading-sm ${classes[status].header}`}>
        <FiberManualRecordIcon style={{ fontSize: 12 }} />
        <span className="ml-2">{capitalize(status)}</span>
      </h3>
    </div>
  );
};

export default Status;
