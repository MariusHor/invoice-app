import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { capitalize } from "utils";

const status = cva(
  "center col-span-2 w-fit justify-self-center rounded-lg xl:col-span-1 min-w-28",
  {
    variants: {
      intent: {
        pending: ["bg-skin-orange", "text-skin-orange"],
        paid: ["bg-skin-green", "text-skin-green"],
        draft: ["bg-skin-grey", "text-skin-grey"],
      },
      size: {
        small: ["text-sm", "py-2", "px-4"],
        medium: ["text-base", "py-3", "px-5"],
      },
    },
    defaultVariants: {
      intent: "pending",
      size: "small",
    },
  }
);

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
}: StatusProps) => (
  <div className={status({ intent, size, className })} {...props}>
    <h3 className="heading-sm">
      <FiberManualRecordIcon style={{ fontSize: 12 }} />
      <span className="ml-2">{capitalize(statusType)}</span>
    </h3>
  </div>
);
