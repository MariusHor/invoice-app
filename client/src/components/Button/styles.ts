import { cva } from "class-variance-authority";

export const button = cva(
  "button rounded-lg h-fit transition-primary disabled:opacity-40 center shadow-lg",
  {
    variants: {
      intent: {
        primary: [
          "enabled:hover:bg-skin-btn-primary-hover enabled:hover:border-btn-primary-hover",
        ],
        "primary-link": [
          "hover:bg-skin-btn-primary-hover hover:border-btn-primary-hover",
        ],
        secondary: [
          "bg-skin-btn-secondary",
          "border border-btn-secondary",
          "enabled:hover:bg-skin-btn-secondary-hover enabled:hover:border-btn-secondary-hover",
        ],
        accent: [
          "bg-skin-btn-accent",
          "border border-btn-accent",
          "enabled:hover:bg-skin-btn-accent-hover enabled:hover:border-btn-accent-hover",
        ],
        outlined: [
          "enabled:hover:border-btn-outlined-hover enabled:hover:bg-skin-btn-outlined-hover border-btn-outlined-hover",
        ],
        "outlined-link": [
          "hover:border-btn-outlined-hover hover:bg-skin-btn-outlined-hover border-btn-outlined-hover",
        ],
      },

      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-1.5", "px-4"],
        fixed: ["w-28 py-1.5 px-4"],
      },
    },
    compoundVariants: [
      {
        intent: ["primary", "primary-link", "secondary", "accent"],
        class: "text-white",
      },
      {
        intent: ["primary", "primary-link"],
        class: "bg-skin-btn-primary border border-btn-primary",
      },
      {
        intent: ["outlined", "outlined-link"],
        class: "text-skin-base hover:text-skin-dark border border-btn-outlined",
      },
      {
        size: ["small", "medium"],
        class: "w-fit",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);
