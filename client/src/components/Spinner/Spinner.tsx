import { HTMLAttributes } from "react";
import { CircularProgress } from "@mui/material";
import { cva } from "class-variance-authority";
import { type VariantProps } from "class-variance-authority";

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
