import { HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { capitalize } from "utils";
import { status } from "./styles";

export interface StatusProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof status> {
  statusType: string;
}

export const InvoiceStatus = ({
  className,
  intent,
  size,
  statusType = "pending",
  ...props
}: StatusProps): React.JSX.Element => (
  <div className={status({ intent, size, className })} {...props}>
    <p className="heading-sm">
      <FiberManualRecordIcon style={{ fontSize: 12 }} />
      <span className="ml-2">{capitalize(statusType)}</span>
    </p>
  </div>
);
