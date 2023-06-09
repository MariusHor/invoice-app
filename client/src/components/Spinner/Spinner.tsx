import { HTMLAttributes } from "react";
import { CircularProgress } from "@mui/material";
import { type VariantProps } from "class-variance-authority";
import { spinner } from "./styles";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinner> {}

export const Spinner = ({ className, intent, ...props }: SpinnerProps) => (
  <div className={spinner({ intent, className })} {...props}>
    <CircularProgress />
  </div>
);
