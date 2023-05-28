import { cva } from "class-variance-authority";

export const button = cva("button rounded-3xl font-bold transition-primary", {
  variants: {
    intent: {
      primary: ["bg-skin-btn-primary", "hover:bg-skin-btn-primary-hover"],
      secondary: ["bg-skin-btn-secondary", "hover:bg-skin-btn-secondary-hover"],
      accent: ["bg-skin-btn-accent", "hover:bg-skin-btn-accent-hover"],
      outlined: [
        "bg-skin-btn-outlined",
        "text-skin-grey",
        "border border-slate-200",
        "hover:bg-skin-btn-outlined-hover",
      ],
    },

    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-3", "px-5"],
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
});
