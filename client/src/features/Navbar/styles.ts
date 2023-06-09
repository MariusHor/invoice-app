import { cva } from "class-variance-authority";

export const navbar = cva("flex h-fit justify-between gap-6 ", {
  variants: {
    intent: {
      private: [
        "lg:row-span-6 lg:flex-col",
        "lg:min-h-screen lg:w-20",
        "lg:rounded-r-3xl bg-skin-static",
      ],
      public: ["container mx-auto py-2"],
    },
    defaultVariants: {
      intent: "public",
    },
  },
});
