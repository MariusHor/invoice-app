import { CircularProgress } from "@mui/material";
import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const spinner = cva("flex-center w-full", {
  variants: {
    intent: {
      full: ["h-screen"],
      inner: ["grow"],
    },
  },
  defaultVariants: {
    intent: "full",
  },
});

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinner> {}

export const Spinner = ({ className, intent, ...props }: SpinnerProps) => (
  <div className={spinner({ intent, className })} {...props}>
    <CircularProgress />
  </div>
);
