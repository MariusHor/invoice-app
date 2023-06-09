import { cva } from "class-variance-authority";

export const status = cva(
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
