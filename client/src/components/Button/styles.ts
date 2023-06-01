import { cva } from "class-variance-authority";

export const button = cva(
  "button rounded-xl h-fit font-bold transition-primary disabled:opacity-40 center",
  {
    variants: {
      intent: {
        primary: [
          "bg-skin-btn-primary",
          "enabled:hover:bg-skin-btn-primary-hover",
        ],
        secondary: [
          "bg-skin-btn-secondary",
          "enabled:hover:bg-skin-btn-secondary-hover",
        ],
        accent: [
          "bg-skin-btn-accent",
          "enabled:hover:bg-skin-btn-accent-hover",
        ],
        outlined: [
          "text-skin-grey",
          "border border-slate-500",
          "hover:bg-skin-btn-outlined-hover",
        ],
      },

      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-5"],
      },
    },
    compoundVariants: [
      {
        intent: ["primary", "secondary", "accent"],
        class: "border-transparent text-white",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);
