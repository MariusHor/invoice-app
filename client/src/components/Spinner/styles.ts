import { cva } from "class-variance-authority";

export const spinner = cva("flex-center w-full", {
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
